import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M4 Max, 64GB RAM (2024)">
            This machine is an absolute beast—40-core GPU, 16-core CPU, and 2TB of blazing-fast SSD. It's quiet, cool, and handles everything from Docker containers to Logic Pro without breaking a sweat.
          </Tool>
          <Tool title="2019 iPad Pro 12.9” with Apple Pencil">
            Great for sketching, writing, and casual browsing. It also doubles as a side monitor thanks to Sidecar.
          </Tool>
          <Tool title="Roland FP-30X Digital Piano">
            Full-weighted keys and solid onboard sounds—this is my go-to for piano practice and MIDI input.
          </Tool>
          <Tool title="MPC Live II + MPK Mini Plus + Studio Monitors">
            Perfect combo for beat-making and music production. The Live II’s standalone capability pairs nicely with the MPK Mini for portability, and the monitors keep everything sounding clean.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code + Cursor">
            My daily drivers for most coding. VS Code for its ecosystem and extensions, Cursor when I want AI superpowers baked right into the editor. It's like having a pair programmer who actually knows what they're doing.
          </Tool>
          <Tool title="JetBrains IDEs (WebStorm, IntelliJ IDEA)">
            When I need the heavy artillery for complex projects. The refactoring tools and intelligent code assistance are unmatched, especially for TypeScript and Java projects.
          </Tool>
          <Tool title="Warp">
            The terminal that convinced me terminals could actually be fun. With its block-based structure, AI command suggestions, and collaborative features, it's like having a chatty assistant who never judges you for forgetting how to exit vim... again.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Music Production">
          <Tool title="Logic Pro 11">
            My main DAW for everything from quick ideas to full productions. Runs like butter on the M4 Max and plays nice with all my hardware.
          </Tool>
          <Tool title="MPC 3.5">
            The inception setup: MPC software running as a VST inside Logic while my Live II acts as the controller, sometimes with the Roland or MPK Mini thrown in for good measure. It's beautifully chaotic—MPC controlling MPC while Logic records it all.
          </Tool>
          <Tool title="Splice">
            My go-to for fresh samples and sounds. The subscription keeps me stocked with everything from obscure vinyl chops to modern trap kits when inspiration strikes at 2 AM.
          </Tool>
          <Tool title="Tracklib">
            Legal sample clearance made simple. Digging through their vault of original recordings feels like crate digging, but with the paperwork already sorted out.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Video Production">
          <Tool title="Final Cut Pro 11">
            Lightning fast on the M4 Max. The magnetic timeline still feels like magic after all these years.
          </Tool>
          <Tool title="Motion + Compressor">
            Motion for graphics and effects, Compressor for encoding. The perfect Final Cut companions.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">
            It's not the newest kid on the block but it's still the fastest. The
            Sublime Text of the application launcher world.
          </Tool>
        </ToolsSection>
        <ToolsSection title="AI & Automation">
          <Tool title="🤖 Why I Have All These AI Tools">
            Look, if AI is coming for my job (and let's be honest, it probably is), then I'm going to make sure I can at least direct the takeover. Think of it as career insurance with a side of existential dread. I'm not just learning to code—I'm learning to speak fluent AI. Because if robots are going to replace me, I want to be the human whispering sweet prompts in their digital ears. Plus, mastering prompt and context engineering means I can either work for myself or help others navigate our inevitable AI overlords. It's like learning to ride the wave instead of getting swept away by it. 🏄‍♂️
          </Tool>
          <Tool title="Claude (Anthropic)">
            My go-to AI for thoughtful conversations, code reviews, and writing. It's like having a really smart colleague who never gets tired of my dumb questions.
          </Tool>
          <Tool title="ChatGPT">
            The Swiss Army knife of AI tools. Whether I need quick code snippets, brainstorming sessions, or help explaining complex concepts, it's always ready to help.
          </Tool>
          <Tool title="GitHub Copilot">
            My coding sidekick that finishes my thoughts—sometimes better than I would have. The autocomplete suggestions are eerily accurate.
          </Tool>
          <Tool title="JetBrains AI Assistant">
            Seamlessly integrated into my IDEs, this makes refactoring and code analysis feel like magic. Perfect for when I need AI help without leaving my development environment.
          </Tool>
          <Tool title="Notion AI">
            Helps me organize thoughts, draft content, and manage my knowledge base. It's particularly good at turning messy brain dumps into structured documentation.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
