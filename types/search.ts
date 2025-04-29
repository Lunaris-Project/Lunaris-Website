export interface SearchResult {
  title: string
  href: string
  type: "docs" | "config" | "command" | "api" | "content"
  description: string
  content?: string
}
