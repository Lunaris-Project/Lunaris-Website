export default function IDEExtensionPage() {
  return (
    <div className="mx-auto w-full space-y-6">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">IDE Extension</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Apply HyprLuna themes to your code editors and IDEs
        </p>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="introduction">
          Introduction
        </h2>
        <p>
          HyprLuna can extend its theming to popular code editors like VS Code, NeoVim, and JetBrains IDEs.
          This ensures a consistent look and feel across your entire desktop environment.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="supported-editors">
          Supported Editors
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Visual Studio Code</li>
          <li>NeoVim</li>
          <li>Vim</li>
          <li>JetBrains IDEs (IntelliJ, PyCharm, etc.)</li>
        </ul>
      </div>

      <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-md text-center">
        <p className="text-sm">
          This is a placeholder page. Full documentation will be added soon.
        </p>
      </div>
    </div>
  )
} 