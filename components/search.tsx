"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { SearchIcon, FileText, Terminal, Package, Settings, FileSearch } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { searchContent } from "@/lib/search-utils"
import { SearchResult } from "@/types/search"

export function SearchBar({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // Search when query changes
  useEffect(() => {
    const performSearch = async () => {
      if (query.length >= 2) {
        setIsSearching(true)
        try {
          const results = await searchContent(query)
          setSearchResults(results)
        } catch (error) {
          console.error("Error searching:", error)
          setSearchResults([])
        } finally {
          setIsSearching(false)
        }
      } else {
        setSearchResults([])
      }
    }

    const debounce = setTimeout(() => {
      performSearch()
    }, 300)

    return () => clearTimeout(debounce)
  }, [query])

  const handleSelect = (result: SearchResult) => {
    setOpen(false)
    router.push(result.href)
  }

  const handleInputClick = () => {
    setOpen(true)
  }

  // Group results by type for better organization
  const docsResults = searchResults.filter(item => item.type === "docs")
  const configResults = searchResults.filter(item => item.type === "config")
  const apiResults = searchResults.filter(item => item.type === "api")
  const commandResults = searchResults.filter(item => item.type === "command")
  const contentResults = searchResults.filter(item => item.type === "content")

  return (
    <>
      <div className={cn("relative w-full", className)}>
        <SearchIcon className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        <Input
          ref={inputRef}
          type="search"
          placeholder="Search anything... (⌘K)"
          className="w-full appearance-none bg-background pl-8 pr-4 shadow-none"
          onClick={handleInputClick}
        />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search anything..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>
            {isSearching ? "Searching..." : "No results found."}
          </CommandEmpty>

          {/* Documentation results */}
          {docsResults.length > 0 && (
            <CommandGroup heading="Documentation">
              {docsResults.map((result, index) => (
                <CommandItem key={`docs-${index}`} onSelect={() => handleSelect(result)} className="flex items-center">
                  <FileText className="mr-2 h-4 w-4 flex-shrink-0" />
                  <div className="overflow-hidden">
                    <p className="font-medium truncate">{result.title}</p>
                    <p className="text-sm text-muted-foreground truncate">{result.description}</p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {/* Configuration results */}
          {configResults.length > 0 && (
            <>
              {docsResults.length > 0 && <CommandSeparator />}
              <CommandGroup heading="Configuration">
                {configResults.map((result, index) => (
                  <CommandItem key={`config-${index}`} onSelect={() => handleSelect(result)} className="flex items-center">
                    <Settings className="mr-2 h-4 w-4 flex-shrink-0" />
                    <div className="overflow-hidden">
                      <p className="font-medium truncate">{result.title}</p>
                      <p className="text-sm text-muted-foreground truncate">{result.description}</p>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}

          {/* API results */}
          {apiResults.length > 0 && (
            <>
              {(docsResults.length > 0 || configResults.length > 0) && <CommandSeparator />}
              <CommandGroup heading="API Reference">
                {apiResults.map((result, index) => (
                  <CommandItem key={`api-${index}`} onSelect={() => handleSelect(result)} className="flex items-center">
                    <Package className="mr-2 h-4 w-4 flex-shrink-0" />
                    <div className="overflow-hidden">
                      <p className="font-medium truncate">{result.title}</p>
                      <p className="text-sm text-muted-foreground truncate">{result.description}</p>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}

          {/* Command results */}
          {commandResults.length > 0 && (
            <>
              {(docsResults.length > 0 || configResults.length > 0 || apiResults.length > 0) && <CommandSeparator />}
              <CommandGroup heading="Commands">
                {commandResults.map((result, index) => (
                  <CommandItem key={`command-${index}`} onSelect={() => handleSelect(result)} className="flex items-center">
                    <Terminal className="mr-2 h-4 w-4 flex-shrink-0" />
                    <div className="overflow-hidden">
                      <p className="font-medium truncate">{result.title}</p>
                      <p className="text-sm text-muted-foreground truncate">{result.description}</p>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}

          {/* Content results */}
          {contentResults.length > 0 && (
            <>
              {(docsResults.length > 0 || configResults.length > 0 || apiResults.length > 0 || commandResults.length > 0) && <CommandSeparator />}
              <CommandGroup heading="Content">
                {contentResults.map((result, index) => (
                  <CommandItem key={`content-${index}`} onSelect={() => handleSelect(result)} className="flex items-center">
                    <FileSearch className="mr-2 h-4 w-4 flex-shrink-0" />
                    <div className="overflow-hidden">
                      <p className="font-medium truncate">{result.title}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {result.content && result.content.length > 60
                          ? `${result.content.substring(0, 60)}...`
                          : result.content}
                      </p>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}

