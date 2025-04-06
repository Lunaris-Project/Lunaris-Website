"use client"

import { useState } from "react"
import { Check, Copy, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  highlightLines?: number[]
  className?: string
}

export function CodeBlock({
  code,
  language = "bash",
  filename,
  showLineNumbers = false,
  highlightLines = [],
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.trim().split("\n")

  return (
    <div className={cn("rounded-lg border overflow-hidden", className)}>
      {filename && (
        <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2">
          <div className="flex items-center gap-2">
            {language === "bash" && <Terminal className="h-4 w-4 text-muted-foreground" />}
            <span className="text-sm font-medium">{filename}</span>
          </div>
          <button
            onClick={copyToClipboard}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span className="sr-only">Copy code</span>
          </button>
        </div>
      )}
      <div className="relative">
        <pre className={cn("p-4 text-sm overflow-x-auto", showLineNumbers && "pl-12")}>
          {showLineNumbers && (
            <div className="absolute left-0 top-0 h-full w-8 border-r bg-muted/40 flex flex-col items-end pr-2 pt-4 text-xs text-muted-foreground select-none">
              {lines.map((_, i) => (
                <div key={i} className="leading-5">
                  {i + 1}
                </div>
              ))}
            </div>
          )}
          <code>
            {lines.map((line, i) => (
              <div
                key={i}
                className={cn("leading-5", highlightLines.includes(i + 1) && "bg-primary/10 -mx-4 px-4 block")}
              >
                {line || " "}
              </div>
            ))}
          </code>
        </pre>
        {!filename && (
          <button
            onClick={copyToClipboard}
            className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md bg-background text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span className="sr-only">Copy code</span>
          </button>
        )}
      </div>
    </div>
  )
}

