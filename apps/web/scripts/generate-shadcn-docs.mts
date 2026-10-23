import * as fs from "node:fs";
import * as path from "node:path";

const UI_DIR = path.resolve(process.cwd(), "src/components/ui");
const EXAMPLES_DIR = path.resolve(process.cwd(), "src/registry/default/examples");
const DOCS_DIR = path.resolve(process.cwd(), "content/docs/base-ui");
const REGISTRY_FILE = path.resolve(process.cwd(), "src/registry/base-components.ts");
const REGISTRY_MAP_FILE = path.resolve(process.cwd(), "src/registry/registry-map.ts");

fs.mkdirSync(EXAMPLES_DIR, { recursive: true });
fs.mkdirSync(DOCS_DIR, { recursive: true });

function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

function toTitleCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const customDemos: Record<string, string> = {
  button: `import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}
`,
  badge: `import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  );
}
`,
  card: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CardDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Configure your deployment settings and preferences.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
`,
  accordion: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>Yes. It comes with default styles that match the other components.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It&apos;s animated by default with CSS transitions.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
`,
  dialog: `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
        </DialogHeader>
        <div className="py-4 text-sm text-muted-foreground">This modal is powered by Radix UI Dialog primitives.</div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
`,
  avatar: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar>
        <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&auto=format&fit=crop&q=80" alt="Avatar" />
        <AvatarFallback>CR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  );
}
`,
  alert: `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function AlertDemo() {
  return (
    <Alert className="max-w-md">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the shadcn CLI.</AlertDescription>
    </Alert>
  );
}
`,
  "alert-dialog": `import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Alert Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone. This will permanently delete your account.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
`,
  checkbox: `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}
`,
  switch: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
`,
  tabs: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[380px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Manage your profile and account settings.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Account configurations are saved automatically.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your password here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Ensure your password is strong and distinct.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
`,
  progress: `import { Progress } from "@/components/ui/progress";

export default function ProgressDemo() {
  return <Progress value={66} className="w-[60%]" />;
}
`,
  slider: `import { Slider } from "@/components/ui/slider";

export default function SliderDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />;
}
`,
  skeleton: `import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
`,
  separator: `import { Separator } from "@/components/ui/separator";

export default function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix UI Primitives</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
        <Separator orientation="vertical" />
        <div>Community</div>
      </div>
    </div>
  );
}
`,
  popover: `import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
`,
  tooltip: `import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover over me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  );
}
`,
  input: `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputDemo() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email address" />
    </div>
  );
}
`,
  textarea: `import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function TextareaDemo() {
  return (
    <div className="grid w-full gap-1.5 max-w-sm">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  );
}
`,
  select: `import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  );
}
`,
  sheet: `import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when you&apos;re done.</SheetDescription>
        </SheetHeader>
        <div className="py-4 text-sm text-muted-foreground">Sheet drawer panel content.</div>
      </SheetContent>
    </Sheet>
  );
}
`,
  breadcrumb: `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

export default function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
`,
  spinner: `import { Spinner } from "@/components/ui/spinner";

export default function SpinnerDemo() {
  return (
    <div className="flex items-center gap-4">
      <Spinner className="size-6 text-primary" />
      <span className="text-sm text-muted-foreground">Loading components...</span>
    </div>
  );
}
`,
  empty: `import { Empty, EmptyTitle, EmptyDescription } from "@/components/ui/empty";

export default function EmptyDemo() {
  return (
    <Empty className="border border-dashed rounded-lg p-8 max-w-sm">
      <EmptyTitle>No items found</EmptyTitle>
      <EmptyDescription>Try adjusting your search criteria to find relevant elements.</EmptyDescription>
    </Empty>
  );
}
`,
  calendar: `import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border shadow-sm" />
    </div>
  );
}
`,
  chart: `import * as React from "react";

export default function ChartDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card text-sm text-muted-foreground">
      <span>Interactive Chart Component</span>
    </div>
  );
}
`,
  direction: `import * as React from "react";
import { DirectionProvider } from "@/components/ui/direction";

export default function DirectionDemo() {
  return (
    <DirectionProvider dir="ltr">
      <div className="p-4 text-sm text-muted-foreground border rounded-lg">Direction Provider (LTR)</div>
    </DirectionProvider>
  );
}
`,
  form: `import * as React from "react";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FormDemo() {
  const form = useForm({
    defaultValues: { username: "" },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="space-y-4 max-w-sm">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
`,
  "input-otp": `import * as React from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export default function InputOtpDemo() {
  return (
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  );
}
`,
  resizable: `import * as React from "react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6 text-sm font-semibold">One</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6 text-sm font-semibold">Two</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
`,
  sonner: `import * as React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function SonnerDemo() {
  return (
    <div>
      <Toaster />
      <Button variant="outline" onClick={() => toast("Event has been created.")}>
        Show Toast
      </Button>
    </div>
  );
}
`,
  toast: `import * as React from "react";
import { Button } from "@/components/ui/button";

export default function ToastDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Button variant="outline">Toast Notification</Button>
    </div>
  );
}
`,
  "toggle-group": `import * as React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
`,
  sidebar: `import * as React from "react";
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Home, Inbox, Calendar, Search, Settings } from "lucide-react";

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

export default function SidebarDemo() {
  return (
    <SidebarProvider className="min-h-[300px] border rounded-lg overflow-hidden">
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main className="p-4 flex-1 text-sm text-muted-foreground">Main Content Area</main>
    </SidebarProvider>
  );
}
`,
  "message-scroller": `import * as React from "react";

export default function MessageScrollerDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card text-sm text-muted-foreground">
      <span>Message Scroller Component</span>
    </div>
  );
}
`,
  kbd: `import { Kbd } from "@/components/ui/kbd";

export default function KbdDemo() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Press</span>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
      <span className="text-sm text-muted-foreground">to open command palette</span>
    </div>
  );
}
`,
};

function generateGenericDemo(componentName: string, exports: string[]): string {
  const mainExport = exports.find((e) => e.toLowerCase() === componentName.replace(/-/g, "").toLowerCase()) || exports[0] || toPascalCase(componentName);
  return `import * as React from "react";
import { ${mainExport} } from "@/components/ui/${componentName}";

export default function ${toPascalCase(componentName)}Demo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <${mainExport}>
        <span>${toTitleCase(componentName)} Component</span>
      </${mainExport}>
    </div>
  );
}
`;
}

function extractExports(fileContent: string): string[] {
  const exportMatches = fileContent.matchAll(/export\s+(?:function|const|class)\s+([A-Za-z0-9_]+)/g);
  const exports: string[] = [];
  for (const match of exportMatches) {
    if (match[1]) exports.push(match[1]);
  }
  return exports;
}

function main() {
  console.log("Scanning base shadcn UI components in:", UI_DIR);

  const files = fs.readdirSync(UI_DIR).filter((f) => f.endsWith(".tsx"));
  const componentNames: string[] = [];
  const registryEntries: any[] = [];
  const mapImports: string[] = [];
  const mapEntries: string[] = [];

  for (const file of files) {
    const name = file.replace(/\.tsx$/, "");
    componentNames.push(name);

    const filePath = path.join(UI_DIR, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const exportedSymbols = extractExports(fileContent);

    // 1. Generate Demo Component in src/registry/default/examples/
    const demoPath = path.join(EXAMPLES_DIR, `${name}-demo.tsx`);
    const demoCode = customDemos[name] || generateGenericDemo(name, exportedSymbols);
    fs.writeFileSync(demoPath, demoCode, "utf-8");

    // 2. Generate MDX in content/docs/base-ui/
    const mdxPath = path.join(DOCS_DIR, `${name}.mdx`);
    const title = toTitleCase(name);
    const mdxContent = `---
title: ${title}
description: Standard Radix-based ${title} component from shadcn/ui.
---

<ComponentPreview name="${name}-demo" />

## Installation

### CLI

\`\`\`bash
npx shadcn@latest add https://crodic.dev/r/${name}.json
\`\`\`

## Usage

\`\`\`tsx
import { ${exportedSymbols[0] || title.replace(/\s+/g, "")} } from "@/components/ui/${name}";
\`\`\`

\`\`\`tsx
<${exportedSymbols[0] || title.replace(/\s+/g, "")}>Click me</${exportedSymbols[0] || title.replace(/\s+/g, "")}>
\`\`\`
`;
    fs.writeFileSync(mdxPath, mdxContent, "utf-8");

    // 3. Prepare registry map entry
    const varName = `${toPascalCase(name)}Demo`;
    mapImports.push(`import ${varName} from "@/registry/default/examples/${name}-demo";`);
    mapEntries.push(`  "${name}-demo": ${varName},`);

    // 4. Prepare registry entry
    registryEntries.push({
      name,
      type: "registry:ui",
      title,
      description: `Radix-based ${title} component.`,
      dependencies: ["radix-ui", "class-variance-authority", "lucide-react"],
      files: [
        {
          path: `src/components/ui/${file}`,
          type: "registry:ui",
        },
      ],
    });
  }

  // Generate content/docs/base-ui/meta.json
  const metaJson = {
    title: "Base Components",
    pages: componentNames.sort(),
  };
  fs.writeFileSync(path.join(DOCS_DIR, "meta.json"), JSON.stringify(metaJson, null, 2), "utf-8");

  // Generate src/registry/base-components.ts
  const baseComponentsTs = `// Auto-generated by scripts/generate-shadcn-docs.mts
export interface RegistryFile {
  path: string;
  type: string;
  content?: string;
  target?: string;
}

export interface RegistryItem {
  name: string;
  type: "registry:ui" | "registry:block" | "registry:hook";
  title: string;
  description: string;
  dependencies?: string[];
  devDependencies?: string[];
  registryDependencies?: string[];
  files: RegistryFile[];
}

export const baseComponents: RegistryItem[] = ${JSON.stringify(registryEntries, null, 2)};
`;
  fs.writeFileSync(REGISTRY_FILE, baseComponentsTs, "utf-8");

  // Generate src/registry/registry-map.ts
  const registryMapTs = `// Auto-generated by scripts/generate-shadcn-docs.mts
import * as React from "react";

export const registryMap: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
${componentNames.map((name) => `  "${name}-demo": React.lazy(() => import("@/registry/default/examples/${name}-demo")),`).join("\n")}
};
`;
  fs.writeFileSync(REGISTRY_MAP_FILE, registryMapTs, "utf-8");

  console.log(`Successfully generated docs, demos, and registry entries for ${componentNames.length} components!`);
}

main();
