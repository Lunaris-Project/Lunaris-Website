import Link from "next/link"
import { ArrowRight, Github, GitPullRequest, Code, BookOpen, Bug } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"

export default function ContributingPage() {
  return (
    <div className="mx-auto w-full space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight" id="contributing">
          Contributing
        </h1>
        <p className="text-lg text-muted-foreground">
          Help improve HyprLuna by contributing to the project.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="getting-started">
          Getting Started
        </h2>
        <p>
          We welcome contributions from everyone, whether you're fixing a typo, improving documentation, adding new features, or fixing bugs. This guide will help you get started with contributing to HyprLuna.
        </p>
        <div className="flex items-center gap-2 mt-4">
          <Github className="h-5 w-5 text-primary" />
          <Link href="https://github.com/Lunaris-Project/HyprLuna" 
                className="text-primary hover:underline" 
                target="_blank" 
                rel="noopener noreferrer">
            github.com/Lunaris-Project/HyprLuna
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="ways-to-contribute">
          Ways to Contribute
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Bug className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Report Issues</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Found a bug or have a suggestion? Open an issue on GitHub to let us know.
            </p>
            <Link href="https://github.com/Lunaris-Project/HyprLuna/issues/new" 
                  className="text-primary text-sm hover:underline inline-flex items-center gap-1 mt-2" 
                  target="_blank" 
                  rel="noopener noreferrer">
              Open an issue
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Code className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Submit Code</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Implement new features or fix bugs by submitting a pull request.
            </p>
            <Link href="https://github.com/Lunaris-Project/HyprLuna/pulls" 
                  className="text-primary text-sm hover:underline inline-flex items-center gap-1 mt-2" 
                  target="_blank" 
                  rel="noopener noreferrer">
              View pull requests
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Improve Documentation</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Help make our documentation clearer, more accurate, and more comprehensive.
            </p>
            <Link href="https://github.com/Lunaris-Project/HyprLuna/tree/main/docs" 
                  className="text-primary text-sm hover:underline inline-flex items-center gap-1 mt-2" 
                  target="_blank" 
                  rel="noopener noreferrer">
              View documentation
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <GitPullRequest className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Share Your Configs</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Created a cool configuration or theme? Share it with the community.
            </p>
            <Link href="https://github.com/Lunaris-Project/HyprLuna/discussions" 
                  className="text-primary text-sm hover:underline inline-flex items-center gap-1 mt-2" 
                  target="_blank" 
                  rel="noopener noreferrer">
              Join discussions
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="development-workflow">
          Development Workflow
        </h2>
        <Tabs defaultValue="setup" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="setup">Setup</TabsTrigger>
            <TabsTrigger value="workflow">Workflow</TabsTrigger>
            <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
          </TabsList>
          <TabsContent value="setup" className="mt-4 space-y-4">
            <p>
              To contribute to HyprLuna, you'll need to set up your development environment first.
            </p>
            <h3 className="font-medium">1. Fork and Clone the Repository</h3>
            <CodeBlock
              code={`# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/HyprLuna.git
cd HyprLuna

# Add the original repository as upstream
git remote add upstream https://github.com/Lunaris-Project/HyprLuna.git`}
              filename="Terminal"
              showLineNumbers={true}
            />
            <h3 className="font-medium mt-6">2. Install Dependencies</h3>
            <p className="text-sm text-muted-foreground">
              Make sure you have all the required dependencies installed:
            </p>
            <CodeBlock
              code={`# For Arch-based distributions
sudo pacman -S hyprland xdg-desktop-portal-hyprland waybar wofi kitty \
  networkmanager brightnessctl pamixer playerctl grim slurp \
  jq wget nodejs npm git`}
              filename="Terminal"
              showLineNumbers={true}
            />
            <h3 className="font-medium mt-6">3. Create a Development Branch</h3>
            <CodeBlock
              code={`# Create a new branch for your changes
git checkout -b feature/your-feature-name

# Or for bugfixes
git checkout -b fix/issue-you-are-fixing`}
              filename="Terminal"
              showLineNumbers={true}
            />
          </TabsContent>
          <TabsContent value="workflow" className="mt-4 space-y-4">
            <p>
              Follow this workflow to contribute changes to HyprLuna.
            </p>
            <h3 className="font-medium">1. Make Your Changes</h3>
            <p className="text-sm text-muted-foreground">
              Make the necessary changes to the codebase. Ensure your changes follow our coding style and guidelines.
            </p>
            <h3 className="font-medium mt-6">2. Test Your Changes</h3>
            <CodeBlock
              code={`# Test your changes to ensure they work as expected
# For testing config files, you can use:
hyprctl reload

# For testing scripts, you can use:
chmod +x ~/.config/hypr/scripts/your-script.sh
~/.config/hypr/scripts/your-script.sh`}
              filename="Terminal"
              showLineNumbers={true}
            />
            <h3 className="font-medium mt-6">3. Commit Your Changes</h3>
            <CodeBlock
              code={`# Stage your changes
git add .

# Commit your changes with a descriptive message
git commit -m "Add feature: description of your changes"

# Push your changes to your fork
git push origin feature/your-feature-name`}
              filename="Terminal"
              showLineNumbers={true}
            />
            <h3 className="font-medium mt-6">4. Create a Pull Request</h3>
            <p className="text-sm text-muted-foreground">
              Go to the <a href="https://github.com/Lunaris-Project/HyprLuna/pulls" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">HyprLuna repository</a> and click on "New Pull Request". Select your fork and the branch you created. Fill out the pull request template with all the necessary information.
            </p>
          </TabsContent>
          <TabsContent value="guidelines" className="mt-4 space-y-4">
            <p>
              Please follow these guidelines when contributing to HyprLuna.
            </p>
            <h3 className="font-medium">Code Style</h3>
            <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
              <li>Follow the existing code style of the project</li>
              <li>Use meaningful variable and function names</li>
              <li>Add comments for complex logic</li>
              <li>Keep your code clean and maintainable</li>
            </ul>
            <h3 className="font-medium mt-6">Commit Messages</h3>
            <p className="text-sm text-muted-foreground">
              Write clear, concise commit messages that explain what changes were made and why.
            </p>
            <CodeBlock
              code={`# Good commit message examples
"Add volume control script for easier audio management"
"Fix issue #42: Ags widgets not showing correct workspace"
"Improve documentation for installation process"`}
              filename="Git Commits"
              showLineNumbers={true}
            />
            <h3 className="font-medium mt-6">Pull Request Guidelines</h3>
            <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
              <li>Create one pull request per feature or bugfix</li>
              <li>Link any related issues in your pull request description</li>
              <li>Provide a clear description of what your changes do</li>
              <li>Include screenshots for UI changes if applicable</li>
              <li>Make sure your code passes all tests before submitting</li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="community-resources">
          Community Resources
        </h2>
        <p>
          Connect with the HyprLuna community to get help with your contributions or discuss ideas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link
            href="https://github.com/Lunaris-Project/HyprLuna/discussions"
            className="rounded-lg border p-4 hover:bg-muted/50 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg font-medium">GitHub Discussions</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Discuss ideas, ask questions, and share your configurations with the community.
            </p>
          </Link>
          <Link
            href="https://discord.gg/hyprcommunity"
            className="rounded-lg border p-4 hover:bg-muted/50 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg font-medium">Discord</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Join the Hyprland community on Discord for real-time discussions and support.
            </p>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="code-of-conduct">
          Code of Conduct
        </h2>
        <p>
          We expect all contributors to follow our Code of Conduct to ensure a welcoming and inclusive environment for everyone.
        </p>
        <div className="rounded-lg border p-4 bg-muted/40 mt-4">
          <h3 className="font-medium">Our Pledge</h3>
          <p className="text-sm text-muted-foreground mt-2">
            In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.
          </p>
          <h3 className="font-medium mt-4">Our Standards</h3>
          <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
            <li>Using welcoming and inclusive language</li>
            <li>Being respectful of differing viewpoints and experiences</li>
            <li>Gracefully accepting constructive criticism</li>
            <li>Focusing on what is best for the community</li>
            <li>Showing empathy towards other community members</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="recognition">
          Contributor Recognition
        </h2>
        <p>
          We value all contributions to HyprLuna and recognize contributors in the following ways:
        </p>
        <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
          <li>Significant contributors may be invited to join the core team</li>
          <li>We highlight notable contributions in our release notes and social media</li>
        </ul>
        <div className="mt-6">
          <p className="text-lg font-medium">Thank you for contributing to HyprLuna!</p>
          <p className="text-muted-foreground mt-1">
            Your contributions help make HyprLuna better for everyone.
          </p>
        </div>
      </div>
    </div>
  )
} 