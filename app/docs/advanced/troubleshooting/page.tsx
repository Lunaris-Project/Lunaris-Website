"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AlertTriangle, Terminal, Code, Zap, Activity, CheckCircle, XCircle, ArrowRight, Bug, RefreshCcw, Cpu } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function TroubleshootingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null)
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [solution, setSolution] = useState<string | null>(null)

  const handleSymptomsSelect = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom))
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom])
    }
  }

  const resetWizard = () => {
    setCurrentStep(0)
    setSelectedIssue(null)
    setSelectedSymptoms([])
    setSolution(null)
  }

  const getIssueTitle = (issue: string) => {
    switch (issue) {
      case "display": return "Display Issues"
      case "performance": return "Performance Problems"
      case "audio": return "Audio Issues"
      case "network": return "Network Connectivity"
      default: return "Unknown Issue"
    }
  }

  const getSolution = () => {
    if (selectedIssue === "display") {
      if (selectedSymptoms.includes("black-screen")) {
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Black Screen Fix</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Check if your GPU drivers are properly installed</li>
              <li>Try switching to a TTY with <code className="bg-muted rounded p-1">Ctrl+Alt+F3</code></li>
              <li>Run the following command to restart your display manager:
                <pre className="rounded-md bg-muted p-4 text-sm mt-2">
                  <code>sudo systemctl restart display-manager</code>
                </pre>
              </li>
              <li>If the issue persists, check your Hyprland configuration for errors:
                <pre className="rounded-md bg-muted p-4 text-sm mt-2">
                  <code>hyprctl binds</code>
                </pre>
              </li>
            </ol>
          </div>
        )
      } else if (selectedSymptoms.includes("screen-tearing")) {
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Screen Tearing Fix</h3>
            <p>Add the following to your Hyprland configuration:</p>
            <pre className="rounded-md bg-muted p-4 text-sm mt-2">
              <code>{`# Enable Variable Refresh Rate
monitor=,highres,auto,1,vrr,1

# Improve animations
animations {
    enabled = true
    bezier = myBezier, 0.05, 0.9, 0.1, 1.05
    animation = windows, 1, 7, myBezier
    animation = windowsOut, 1, 7, default, popin 80%
    animation = border, 1, 10, default
    animation = fade, 1, 7, default
    animation = workspaces, 1, 6, default
}`}</code>
            </pre>
            <p className="text-sm text-muted-foreground">This will enable VRR and optimize animations to reduce tearing.</p>
          </div>
        )
      } else if (selectedSymptoms.includes("weird-colors")) {
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Display Color Issues Fix</h3>
            <p>This is likely related to color profile issues or GPU driver problems.</p>
            <h4 className="font-medium mt-4">Reset color calibration:</h4>
            <pre className="rounded-md bg-muted p-4 text-sm">
              <code>hyprctl keyword decoration:col.active_border "rgba(33ccffee)"
hyprctl keyword decoration:col.inactive_border "rgba(595959aa)"</code>
            </pre>
            <p className="mt-4">If you're using Matugen, try regenerating your theme:</p>
            <pre className="rounded-md bg-muted p-4 text-sm">
              <code>matugen $HOME/Pictures/wallpapers/current.jpg</code>
            </pre>
          </div>
        )
      }
    } else if (selectedIssue === "performance") {
      if (selectedSymptoms.includes("lag")) {
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Performance Optimization</h3>
            <p>Several factors can affect performance in Hyprland. Try these fixes:</p>
            <h4 className="font-medium mt-4">Disable blur and animations:</h4>
            <pre className="rounded-md bg-muted p-4 text-sm">
              <code>{`# Disable blur
decoration {
    blur {
        enabled = false
    }
    drop_shadow = false
}

# Disable animations
animations {
    enabled = false
}`}</code>
            </pre>
            <h4 className="font-medium mt-4">Check resource usage:</h4>
            <pre className="rounded-md bg-muted p-4 text-sm">
              <code>htop</code>
            </pre>
            <p className="text-sm text-muted-foreground mt-2">Look for processes using excessive CPU or memory.</p>
          </div>
        )
      } else if (selectedSymptoms.includes("high-cpu")) {
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">High CPU Usage Fix</h3>
            <p>High CPU usage can be caused by several factors:</p>
            <h4 className="font-medium mt-4">Identify the process causing high CPU:</h4>
            <pre className="rounded-md bg-muted p-4 text-sm">
              <code>ps aux | sort -nrk 3,3 | head -n 10</code>
            </pre>
            <p className="mt-4">Common culprits include:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Waybar with problematic modules (particularly network or custom scripts)</li>
              <li>Electron applications with hardware acceleration issues</li>
              <li>Background processes like file indexers</li>
            </ul>
            <p className="mt-4">Try using a lighter window decoration theme:</p>
            <pre className="rounded-md bg-muted p-4 text-sm">
              <code>hyprctl keyword decoration:inactive_opacity 0.9
hyprctl keyword decoration:active_opacity 1.0</code>
            </pre>
          </div>
        )
      }
    } else if (selectedIssue === "audio") {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Audio Troubleshooting</h3>
          <p>Audio issues in HyprLuna are typically related to PipeWire or PulseAudio configuration.</p>
          <h4 className="font-medium mt-4">Check audio services:</h4>
          <pre className="rounded-md bg-muted p-4 text-sm">
            <code>systemctl --user status pipewire pipewire-pulse wireplumber</code>
          </pre>
          <h4 className="font-medium mt-4">Restart audio services:</h4>
          <pre className="rounded-md bg-muted p-4 text-sm">
            <code>systemctl --user restart pipewire pipewire-pulse wireplumber</code>
          </pre>
          <p className="mt-4">If using PulseAudio instead:</p>
          <pre className="rounded-md bg-muted p-4 text-sm">
            <code>pulseaudio -k && pulseaudio --start</code>
          </pre>
          <p className="text-sm text-muted-foreground mt-2">This restarts your audio server and should fix most audio issues.</p>
        </div>
      )
    } else if (selectedIssue === "network") {
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Network Connectivity Fixes</h3>
          <p>Network issues can be related to drivers, NetworkManager, or configuration problems.</p>
          <h4 className="font-medium mt-4">Check network interfaces:</h4>
          <pre className="rounded-md bg-muted p-4 text-sm">
            <code>ip a</code>
          </pre>
          <h4 className="font-medium mt-4">Restart NetworkManager:</h4>
          <pre className="rounded-md bg-muted p-4 text-sm">
            <code>sudo systemctl restart NetworkManager</code>
          </pre>
          <p className="mt-4">For Wi-Fi issues, try:</p>
          <pre className="rounded-md bg-muted p-4 text-sm">
            <code>nmcli radio wifi off
nmcli radio wifi on</code>
          </pre>
          <p className="text-sm text-muted-foreground mt-2">This turns Wi-Fi off and back on, which can resolve many connection issues.</p>
        </div>
      )
    }
    
    return null
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">What type of issue are you experiencing?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className={`cursor-pointer border-2 transition-all ${selectedIssue === 'display' ? 'border-primary' : ''}`} onClick={() => setSelectedIssue('display')}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Display Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-muted-foreground">
                    <Bug className="h-5 w-5 mr-2" />
                    <p className="text-sm">Problems with screens, graphics, or visual glitches</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className={`cursor-pointer border-2 transition-all ${selectedIssue === 'performance' ? 'border-primary' : ''}`} onClick={() => setSelectedIssue('performance')}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Performance Problems</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-muted-foreground">
                    <Activity className="h-5 w-5 mr-2" />
                    <p className="text-sm">Slowness, stuttering, or resource usage issues</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className={`cursor-pointer border-2 transition-all ${selectedIssue === 'audio' ? 'border-primary' : ''}`} onClick={() => setSelectedIssue('audio')}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Audio Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
                      <path d="M12 6v12"></path><path d="M6 12h12"></path>
                    </svg>
                    <p className="text-sm">No sound, crackling, or other audio problems</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className={`cursor-pointer border-2 transition-all ${selectedIssue === 'network' ? 'border-primary' : ''}`} onClick={() => setSelectedIssue('network')}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Network Connectivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
                      <path d="M6.5 6.5 17.5 17.5"></path><path d="M2 8.82a15 15 0 0 1 18.5-3.5"></path><path d="M2 15.82a15 15 0 0 0 18.5-3.5"></path><path d="M10.5 13a2.5 2.5 0 0 1 3 3"></path>
                    </svg>
                    <p className="text-sm">Wi-Fi, Ethernet, or internet connection issues</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-end mt-6">
              <Button 
                onClick={() => setCurrentStep(1)} 
                disabled={!selectedIssue}
                className="flex items-center gap-2"
              >
                Next Step
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )
      
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setCurrentStep(0)} className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path>
                </svg>
                Back
              </Button>
              <h3 className="text-xl font-semibold">{getIssueTitle(selectedIssue!)}</h3>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-3">What symptoms are you experiencing?</h4>
              
              {selectedIssue === 'display' && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="black-screen" 
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                      checked={selectedSymptoms.includes('black-screen')}
                      onChange={() => handleSymptomsSelect('black-screen')}
                    />
                    <label htmlFor="black-screen" className="text-sm font-medium">Black screen / Can't start Hyprland</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="screen-tearing" 
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                      checked={selectedSymptoms.includes('screen-tearing')}
                      onChange={() => handleSymptomsSelect('screen-tearing')}
                    />
                    <label htmlFor="screen-tearing" className="text-sm font-medium">Screen tearing or stuttering</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="weird-colors" 
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                      checked={selectedSymptoms.includes('weird-colors')}
                      onChange={() => handleSymptomsSelect('weird-colors')}
                    />
                    <label htmlFor="weird-colors" className="text-sm font-medium">Weird colors or artifacts</label>
                  </div>
                </div>
              )}

              {selectedIssue === 'performance' && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="lag" 
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                      checked={selectedSymptoms.includes('lag')}
                      onChange={() => handleSymptomsSelect('lag')}
                    />
                    <label htmlFor="lag" className="text-sm font-medium">Interface lag or stuttering</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="high-cpu" 
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                      checked={selectedSymptoms.includes('high-cpu')}
                      onChange={() => handleSymptomsSelect('high-cpu')}
                    />
                    <label htmlFor="high-cpu" className="text-sm font-medium">High CPU/GPU usage</label>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex justify-end mt-6">
              <Button 
                onClick={() => setCurrentStep(2)} 
                disabled={selectedSymptoms.length === 0}
                className="flex items-center gap-2"
              >
                Get Solution
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setCurrentStep(1)} className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path>
                </svg>
                Back
              </Button>
              <h3 className="text-xl font-semibold">Recommended Solution</h3>
            </div>
            
            <Card className="border-2 border-primary/50 bg-background">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                  <CardTitle>Solution for {getIssueTitle(selectedIssue!)}</CardTitle>
                </div>
                <CardDescription>Based on the symptoms you selected</CardDescription>
              </CardHeader>
              <CardContent>
                {getSolution()}
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between">
                <Button variant="outline" onClick={resetWizard} className="flex items-center gap-2">
                  <RefreshCcw className="h-4 w-4" />
                  Start Over
                </Button>
                <Button variant="default" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                  Copy Solution
                </Button>
              </CardFooter>
            </Card>
            
            <div className="mt-4 p-4 border rounded-md bg-muted/30">
              <p className="text-sm text-muted-foreground">
                Did this solution fix your problem? If not, try the more detailed solutions in the Common Issues section below,
                or reach out to our community for help.
              </p>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="mx-auto w-full space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Troubleshooting</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Solutions to common issues when using HyprLuna
        </p>
      </div>

      <Alert variant="destructive" className="border-red-500/50 bg-red-500/10">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Before proceeding</AlertTitle>
        <AlertDescription>
          Make sure you've followed the installation guide properly and are using the recommended dependencies for your system.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="interactive-wizard">
          Interactive Troubleshooting Wizard
        </h2>
        <p className="text-muted-foreground">
          Not sure what's wrong? Use our interactive wizard to diagnose your issue and find a solution:
        </p>
        
        <div className="rounded-lg border p-4 mt-4 bg-card">
          {renderCurrentStep()}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="diagnostic-tool">
          Diagnostic Tool
        </h2>
        <p className="text-muted-foreground">
          We've created a diagnostic tool to help you identify and fix common issues with your HyprLuna setup.
          Run the following command in your terminal:
        </p>
        <div className="rounded-lg border bg-card overflow-hidden mt-4">
          <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              <span className="text-sm font-medium">Terminal</span>
            </div>
          </div>
          <pre className="p-4 text-sm overflow-x-auto">
            <code className="text-primary">curl -sSL https://hyprluna.dev/diag | bash</code>
          </pre>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          This tool will scan your system, identify issues, and provide recommendations for fixing them.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="common-issues">
          Common Issues
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="hyprland-not-starting">
            <AccordionTrigger className="text-base font-medium">
              <div className="flex items-center gap-2">
                <Badge variant="destructive" className="rounded-full">Critical</Badge>
                Hyprland fails to start
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pb-4">
              <p>
                This issue is usually caused by missing dependencies, incorrect graphics drivers, or configuration errors.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium">Check the Hyprland log:</h4>
                <pre className="rounded-md bg-muted p-4 text-sm">
                  <code>cat ~/.local/share/hyprland/hyprland.log</code>
                </pre>
              </div>
              
              <div className="mt-2 space-y-1">
                <h4 className="font-medium">Common solutions:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Make sure all required dependencies are installed</li>
                  <li>Check if your graphics drivers are properly configured</li>
                  <li>Verify that your display manager is compatible with Hyprland</li>
                  <li>Try resetting your Hyprland configuration to default</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="screen-tearing">
            <AccordionTrigger className="text-base font-medium">
              <div className="flex items-center gap-2">
                <Badge variant="default" className="rounded-full">Medium</Badge>
                Screen tearing or stuttering
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pb-4">
              <p>
                Screen tearing can occur due to improper refresh rate configuration, missing GPU drivers, or incorrect animation settings.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium">Check your monitor configuration:</h4>
                <pre className="rounded-md bg-muted p-4 text-sm">
                  <code>hyprctl monitors</code>
                </pre>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Update your hyprland.conf:</h4>
                <pre className="rounded-md bg-muted p-4 text-sm">
                  <code>{`# Add this to your hyprland.conf
monitor=,highres,auto,1,vrr,1

# Adjust animation settings
animations {
    enabled = true
    bezier = myBezier, 0.05, 0.9, 0.1, 1.05
    animation = windows, 1, 7, myBezier
    animation = windowsOut, 1, 7, default, popin 80%
    animation = border, 1, 10, default
    animation = fade, 1, 7, default
    animation = workspaces, 1, 6, default
}`}</code>
                </pre>
              </div>
              
              <div className="mt-2 space-y-1">
                <h4 className="font-medium">Additional steps:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Ensure you're using the latest graphics drivers</li>
                  <li>Try disabling animations temporarily to see if they're the cause</li>
                  <li>Check for compositor conflicts with other software</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="waybar-not-showing">
            <AccordionTrigger className="text-base font-medium">
              <div className="flex items-center gap-2">
                <Badge variant="default" className="rounded-full">Medium</Badge>
                Waybar not showing or crashing
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pb-4">
              <p>
                This can happen due to configuration errors, missing modules, or compatibility issues with your system.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium">Debug Waybar by running it manually:</h4>
                <pre className="rounded-md bg-muted p-4 text-sm">
                  <code>waybar -l trace</code>
                </pre>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Check if Waybar is crashing:</h4>
                <pre className="rounded-md bg-muted p-4 text-sm">
                  <code>journalctl -xe | grep waybar</code>
                </pre>
              </div>
              
              <div className="mt-2 space-y-1">
                <h4 className="font-medium">Common solutions:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Remove any problematic modules from your Waybar config</li>
                  <li>Check for syntax errors in the configuration file</li>
                  <li>Try using a minimal configuration to identify problematic modules</li>
                  <li>Make sure all required dependencies for custom modules are installed</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="weird-graphical-glitches">
            <AccordionTrigger className="text-base font-medium">
              <div className="flex items-center gap-2">
                <Badge variant="default" className="rounded-full">Medium</Badge>
                Strange graphical glitches or artifacts
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pb-4">
              <p>
                Graphical glitches can be caused by GPU driver issues, compositor settings, or hardware limitations.
              </p>

              <div className="rounded-lg border overflow-hidden mt-4 mb-4">
                <Image
                  src="/troubleshooting-artifacts.jpg"
                  width={600}
                  height={400}
                  alt="Example of graphical artifacts"
                  className="w-full"
                />
                <div className="p-3 text-sm text-center text-muted-foreground">Example of graphical artifacts</div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Try disabling blur and transparency:</h4>
                <pre className="rounded-md bg-muted p-4 text-sm">
                  <code>{`# In hyprland.conf
decoration {
    blur {
        enabled = false
    }
}

# Set window opacity to 1 (fully opaque)
windowrulev2 = opacity 1.0 override,class:.*`}</code>
                </pre>
              </div>
              
              <div className="mt-2 space-y-1">
                <h4 className="font-medium">Additional solutions:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Update your GPU drivers to the latest version</li>
                  <li>Check for known issues with your specific GPU model</li>
                  <li>Try disabling hardware acceleration in applications</li>
                  <li>Check your monitor cable and connection</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="keyboard-shortcuts">
            <AccordionTrigger className="text-base font-medium">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="rounded-full">Minor</Badge>
                Keyboard shortcuts not working
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pb-4">
              <p>
                If some or all keyboard shortcuts aren't working, it could be due to conflicts, input configuration, or keybinding issues.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium">Check your current keybindings:</h4>
                <pre className="rounded-md bg-muted p-4 text-sm">
                  <code>hyprctl binds</code>
                </pre>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Test if your keyboard is properly detected:</h4>
                <pre className="rounded-md bg-muted p-4 text-sm">
                  <code>hyprctl devices</code>
                </pre>
              </div>
              
              <div className="mt-2 space-y-1">
                <h4 className="font-medium">Common solutions:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Check for conflicting keybindings between applications</li>
                  <li>Verify your keyboard layout is correctly set in Hyprland config</li>
                  <li>Restart Hyprland to reload keybinding configurations</li>
                  <li>Try using different key combinations if specific ones don't work</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ags-widgets">
            <AccordionTrigger className="text-base font-medium">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="rounded-full">Minor</Badge>
                AGS widgets not appearing or looking wrong
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pb-4">
              <p>
                Issues with AGS widgets can be caused by configuration errors, missing dependencies, or JavaScript errors.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium">Debug AGS by running it manually:</h4>
                <pre className="rounded-md bg-muted p-4 text-sm">
                  <code>ags -q; ags</code>
                </pre>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Check AGS logs:</h4>
                <pre className="rounded-md bg-muted p-4 text-sm">
                  <code>cat ~/.cache/ags.log</code>
                </pre>
              </div>
              
              <div className="mt-2 space-y-1">
                <h4 className="font-medium">Common solutions:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Check your JavaScript/TypeScript code for syntax errors</li>
                  <li>Verify that all required dependencies are installed</li>
                  <li>Reset AGS configuration to default and gradually add customizations</li>
                  <li>Make sure your AGS version is compatible with the widgets</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="themes-broken">
            <AccordionTrigger className="text-base font-medium">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="rounded-full">Minor</Badge>
                Themes or colors not applying correctly
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pb-4">
              <p>
                Theme issues can occur due to configuration problems, missing theme files, or incompatible themes with your setup.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium">Check Matugen status:</h4>
                <pre className="rounded-md bg-muted p-4 text-sm">
                  <code>ls -la ~/.cache/material-you/</code>
                </pre>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Regenerate the theme manually:</h4>
                <pre className="rounded-md bg-muted p-4 text-sm">
                  <code>matugen $HOME/Pictures/wallpapers/current.jpg</code>
                </pre>
              </div>
              
              <div className="mt-2 space-y-1">
                <h4 className="font-medium">Common solutions:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Verify that your wallpaper path is correct in theme configuration</li>
                  <li>Check if theme dependencies are properly installed</li>
                  <li>Make sure theme files are correctly linked in all configuration files</li>
                  <li>Try using a different wallpaper to generate themes</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="notification-issues">
            <AccordionTrigger className="text-base font-medium">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="rounded-full">Minor</Badge>
                Notifications not showing or broken
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pb-4">
              <p>
                Notification issues can be related to the notification daemon, application permissions, or configuration problems.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium">Test notifications manually:</h4>
                <pre className="rounded-md bg-muted p-4 text-sm">
                  <code>notify-send "Test Notification" "This is a test notification"</code>
                </pre>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Check notification daemon status:</h4>
                <pre className="rounded-md bg-muted p-4 text-sm">
                  <code>pidof mako || pidof dunst || pidof swaync</code>
                </pre>
              </div>
              
              <div className="mt-2 space-y-1">
                <h4 className="font-medium">Common solutions:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Make sure only one notification daemon is running</li>
                  <li>Check if your notification daemon is correctly configured</li>
                  <li>Verify that Do Not Disturb mode is not enabled</li>
                  <li>Ensure applications have permission to send notifications</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="getting-help">
          Getting Help
        </h2>
        <p>
          If you're still experiencing issues after trying the troubleshooting steps above, you can get help from the community:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <a 
            href="https://discord.gg/qnAHD9keWr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-4 border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <div className="mr-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary"
                >
                  <path d="M18 4a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V7a3 3 0 0 0-3-3z"></path>
                  <path d="M6 4a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V7a3 3 0 0 0-3-3z"></path>
                  <path d="M13 15V7"></path>
                  <path d="M3 15h18c-.175 1.149-.372 2.233-.89 3.22-.507.965-1.21 1.715-2.11 2.233-.77.445-1.69.717-2.73.747-1.035.03-2.143-.206-3.27-.776L12 20l-1 .426c-1.127.57-2.235.806-3.27.776-1.04-.03-1.96-.302-2.73-.747-.9-.518-1.603-1.268-2.11-2.233-.518-.987-.715-2.071-.89-3.22z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-medium">Discord Community</h3>
              <p className="text-sm text-muted-foreground">Join our Discord server for real-time help</p>
            </div>
          </a>
          <a 
            href="https://github.com/Lunaris-Project/HyprLuna/issues" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-4 border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <div className="mr-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-medium">GitHub Issues</h3>
              <p className="text-sm text-muted-foreground">Report bugs or request features on GitHub</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}