export default function ColorSchemesPage() {
  return (
    <div className="mx-auto w-full space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Color Schemes</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Understand and customize HyprLuna color schemes
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="introduction">
          Introduction
        </h2>
        <p>
          HyprLuna uses Material You color schemes generated from your wallpaper. This page explains how
          these color schemes are structured and how to create custom color schemes.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="scheme-structure">
          Color Scheme Structure
        </h2>
        <p>
          Each color scheme consists of primary, secondary, and tertiary colors, along with neutral colors and surface colors.
        </p>
      </div>

      <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-md text-center">
        <p className="text-sm">
          This is a placeholder page. Full documentation will be added soon.
        </p>
      </div>
    </div>
  )
} 