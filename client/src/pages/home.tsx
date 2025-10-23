import { Button } from "@/components/ui/button";
import { FileText, Github, Copy, Check, DollarSign, Globe, Code2, Lock, Zap, Wrench, ShieldCheck } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const [copiedBibtex, setCopiedBibtex] = useState(false);

  // Chart data for baseline performance comparison
  const baselineChartData = [
    { model: "Qwen-2.5-7B", toolFit: 16.0, reasoning: false, frontier: false },
    { model: "Qwen-3-8B*", toolFit: 34.2, reasoning: false, frontier: false },
    { model: "Llama-3.1-8B", toolFit: 42.4, reasoning: false, frontier: false },
    { model: "xLAM-2-8B", toolFit: 15.8, reasoning: false, frontier: false },
    { model: "Qwen-3-8B", toolFit: 52.3, reasoning: true, frontier: false },
    { model: "GPT-5-mini", toolFit: 88.5, reasoning: false, frontier: true },
  ];

  // Chart data for decoupled analysis
  const decoupledChartData = [
    { config: "Both Local", toolSelection: "Qwen-2.5-7B", argGen: "Qwen-2.5-7B", toolFit: 16.0 },
    { config: "Frontier Args", toolSelection: "Qwen-2.5-7B", argGen: "GPT-5-mini", toolFit: 28.8 },
    { config: "Frontier Selection", toolSelection: "GPT-5-mini", argGen: "Qwen-2.5-7B", toolFit: 60.8 },
    { config: "Both Frontier", toolSelection: "GPT-5-mini", argGen: "GPT-5-mini", toolFit: 88.5 },
  ];

  // Chart data for application performance
  const applicationChartData = [
    { model: "DualTuneModel-7B", filesystem: 61.5, monday: 43.2, notion: 71.8, highlight: true },
    { model: "Qwen-2.5-7B", filesystem: 15.0, monday: 19.2, notion: 33.4, highlight: false },
    { model: "Qwen-3-32B-Quant", filesystem: 58.6, monday: 37.0, notion: 85.6, highlight: false },
    { model: "GPT-5-mini", filesystem: 88.4, monday: 76.4, notion: 91.6, highlight: false },
  ];

  const handleCopyBibtex = () => {
    const bibtex = `@article{agentflux2024,
  title={AgentFlux: A Framework for Privacy-Preserving On-Device Agentic Systems},
  author={[Authors to be added]},
  journal={arXiv preprint arXiv:2510.00229},
  year={2024}
}`;
    navigator.clipboard.writeText(bibtex);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-6xl flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <h1 className="text-lg font-semibold">AgentFlux</h1>
            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection('introduction')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-introduction"
              >
                Introduction
              </button>
              <button
                onClick={() => scrollToSection('architecture')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-architecture"
              >
                Architecture
              </button>
              <button
                onClick={() => scrollToSection('results')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-results"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection('citation')}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-citation"
              >
                Citation
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://arxiv.org/abs/2510.00229"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-paper"
            >
              <Button variant="ghost" size="sm" className="gap-2">
                <FileText className="h-4 w-4" />
                Paper
              </Button>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 border-b">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" data-testid="text-hero-title">
              AgentFlux: A Framework for Privacy-Preserving<br />
              On-Device Agentic Systems
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed" data-testid="text-hero-description">
              We introduce a framework for privacy-preserving, on-device AI agent workloads. By decoupling agentic tasks into function selection and argument generation, both tackled by local LLM orchestration, our system delivers accuracy approaching cloud-based models while fully protecting user data from third-party exposure and enabling cost-efficient execution on consumer hardware.
            </p>

            {/* Hero Architecture Diagram */}
            <div className="max-w-4xl mx-auto mt-12 mb-8" data-testid="diagram-hero-architecture">
              <div className="bg-gradient-to-br from-accent/40 to-accent/20 rounded-lg p-8 md:p-12 border border-accent-border shadow-md">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-background/80 backdrop-blur rounded-lg p-6 border border-border text-center transition-all duration-300 hover-elevate cursor-pointer group">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110">
                        <span className="text-2xl font-bold text-primary">1</span>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">Tool Selector Adapter</h4>
                    <p className="text-xs text-muted-foreground">Classification: Which tool to invoke?</p>
                  </div>
                  
                  <div className="bg-background/80 backdrop-blur rounded-lg p-6 border border-border text-center transition-all duration-300 hover-elevate cursor-pointer group">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110">
                        <span className="text-2xl font-bold text-primary">2</span>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">Argument Generator Adapter</h4>
                    <p className="text-xs text-muted-foreground">Generation: Tool-specific arguments</p>
                  </div>
                  
                  <div className="bg-background/80 backdrop-blur rounded-lg p-6 border border-border text-center transition-all duration-300 hover-elevate cursor-pointer group">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110">
                        <span className="text-2xl font-bold text-primary">3</span>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">On-Device Execution</h4>
                    <p className="text-xs text-muted-foreground">Privacy-preserving orchestration</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm font-medium">AgentFlux: Decoupled Post-Training Pipeline & Inference Framework</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-3">
                Figure 1: AgentFlux architecture overview showing the two-phase decoupled approach with specialized LoRA adapters
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <a
                href="https://arxiv.org/abs/2510.00229"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-paper-hero"
              >
                <Button size="lg" className="gap-2">
                  <FileText className="h-5 w-5" />
                  Read Paper
                </Button>
              </a>
              <Button size="lg" variant="outline" className="gap-2" disabled data-testid="button-code">
                <Github className="h-5 w-5" />
                Code (Coming Soon)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-12 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center" data-testid="text-intro-heading">
            Introduction
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-accent/30 rounded-lg p-6 md:p-8 mb-8 border border-accent-border">
              <p className="text-base md:text-lg leading-relaxed mb-4">
                AI systems are rapidly expanding from chatbots and media generation to robotics and financial applications. Leading AI platforms run in the cloud, sending all user queries—often including sensitive context like code, preferences, and past interactions—to third-party providers.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="h-5 w-5 text-destructive" data-testid="icon-privacy-challenge" />
                    <h3 className="font-semibold text-lg">Privacy Challenge</h3>
                  </div>
                  <p className="text-muted-foreground">User data, including medical and financial records, is routinely exposed to cloud providers.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-5 w-5 text-destructive" data-testid="icon-cost-latency" />
                    <h3 className="font-semibold text-lg">Cost & Latency</h3>
                  </div>
                  <p className="text-muted-foreground">Cloud APIs charge per token and throttle requests, with true steady-state costs still unknown.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 md:p-8 border border-card-border">
              <h3 className="text-xl font-semibold mb-4">The Solution: Edge Computing with AgentFlux</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                AgentFlux introduces a new framework for edge computing that partitions workloads into two distinct tasks: selection of functions that need to be called, and argument generation. This partitioning allows for a hierarchical architecture that achieves end-to-end accuracy comparable with state-of-the-art cloud models while maintaining the benefits of privacy and performance on consumer-grade GPUs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center" data-testid="text-usecases-heading">
            Motivating Use Cases
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-lg p-6 border border-card-border" data-testid="card-usecase-blockchain">
              <div className="mb-4">
                <DollarSign className="h-8 w-8 text-primary" data-testid="icon-blockchain" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Blockchains & Financial Applications</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AgentFlux enables local consolidation, analysis, and reporting across blockchain and traditional finance, keeping all private data on-device. Only anonymized outputs leave the user's machine.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-card-border" data-testid="card-usecase-browsers">
              <div className="mb-4">
                <Globe className="h-8 w-8 text-primary" data-testid="icon-browsers" />
              </div>
              <h3 className="text-lg font-semibold mb-3">AI Browsers</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Local models execute privacy-preserving tasks for sensitive data while collaborating with cloud models for large public data like web search summarization.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-card-border" data-testid="card-usecase-coding">
              <div className="mb-4">
                <Code2 className="h-8 w-8 text-primary" data-testid="icon-coding" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Developer Terminals & Coding Agents</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AgentFlux addresses data leakage in coding assistants by executing parts locally and cost-efficiently while maintaining access to entire codebases.
              </p>
            </div>
          </div>

          {/* Demo Video Section */}
          <div className="bg-card rounded-lg p-6 md:p-8 border border-card-border">
            <h3 className="text-xl font-semibold mb-6 text-center">System Demonstration</h3>
            <div className="aspect-video w-full bg-muted/50 rounded-lg border border-border flex items-center justify-center relative overflow-hidden group" data-testid="video-demo-placeholder">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
              <div className="relative z-10 text-center space-y-3 p-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sm font-medium">Video Demo Coming Soon</p>
                <p className="text-xs text-muted-foreground max-w-md mx-auto">
                  Watch AgentFlux in action as it orchestrates privacy-preserving tool calling across multiple applications
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Demo: AgentFlux performing file manipulations, Notion integrations, and Monday.com tasks on-device
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-12 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center" data-testid="text-architecture-heading">
            Core Architecture
          </h2>
          
          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 md:p-8 border border-card-border">
              <p className="text-base md:text-lg leading-relaxed mb-6">
                Agentic systems autonomously solve complex tasks through iterative cycles: decomposing goals into discrete steps, executing each by invoking external tools, and dynamically adjusting based on tool outputs. Success hinges on <strong>LLM orchestration</strong>—the system's ability to accurately select the right tool and generate correct arguments at each decision point.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                AgentFlux fundamentally reimagines this orchestration. Rather than relying on a monolithic LLM orchestrator, it employs <strong>multiple specialized LoRA adapters</strong> trained through a decoupled post-training pipeline and coordinated by a novel inference framework.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-accent/20 rounded-lg p-6 border border-accent-border">
                <h3 className="text-xl font-semibold mb-4">Post-Training Pipeline</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. Tool Selector Adapter</h4>
                    <p className="text-sm text-muted-foreground">Functions as a classifier, identifying the optimal tool for each workflow step during inference.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">2. Argument Generator Adapter</h4>
                    <p className="text-sm text-muted-foreground">Produces precise, context-appropriate arguments for the selected tool at each step.</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/20 rounded-lg p-6 border border-accent-border">
                <h3 className="text-xl font-semibold mb-4">Decoupled Inference Framework</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Classification Sub-Step</h4>
                    <p className="text-sm text-muted-foreground">Dynamically loads the tool selector adapter to determine which tool to invoke.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Argument Generation Sub-Step</h4>
                    <p className="text-sm text-muted-foreground">Dynamically loads the corresponding argument generator adapter to construct the tool's input parameters.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-6 md:p-8 border border-primary/20">
              <p className="text-base leading-relaxed">
                <strong>This modular, two-phase approach</strong> enables precise, adaptive orchestration while maintaining the efficiency and privacy benefits of local execution.
              </p>
            </div>

            {/* Detailed Inference Pipeline Diagram */}
            <div className="mt-8" data-testid="diagram-inference-pipeline">
              <h3 className="text-xl font-semibold mb-6 text-center">Inference Pipeline Flow</h3>
              <div className="bg-card rounded-lg p-6 md:p-8 border border-card-border shadow-md">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold transition-all duration-200 group-hover:scale-110">
                      1
                    </div>
                    <div className="flex-1 bg-accent/20 rounded-lg p-4 border border-accent-border transition-all duration-200 hover-elevate cursor-pointer">
                      <h4 className="font-semibold mb-1">Toolset Selection</h4>
                      <p className="text-sm text-muted-foreground">Base model routes to relevant toolset (Filesystem, Notion, Monday.com)</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-0.5 h-8 bg-border transition-colors duration-200"></div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold transition-all duration-200 group-hover:scale-110">
                      2
                    </div>
                    <div className="flex-1 bg-accent/20 rounded-lg p-4 border border-accent-border transition-all duration-200 hover-elevate cursor-pointer">
                      <h4 className="font-semibold mb-1">Tool Selection (Classification)</h4>
                      <p className="text-sm text-muted-foreground">Load Tool Selector LoRA adapter → Classify which specific tool to invoke</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-0.5 h-8 bg-border transition-colors duration-200"></div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold transition-all duration-200 group-hover:scale-110">
                      3
                    </div>
                    <div className="flex-1 bg-accent/20 rounded-lg p-4 border border-accent-border transition-all duration-200 hover-elevate cursor-pointer">
                      <h4 className="font-semibold mb-1">Argument Generation</h4>
                      <p className="text-sm text-muted-foreground">Load Argument Generator LoRA adapter → Generate precise, structured arguments</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-0.5 h-8 bg-border transition-colors duration-200"></div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold transition-all duration-200 group-hover:scale-110">
                      4
                    </div>
                    <div className="flex-1 bg-primary/10 rounded-lg p-4 border border-primary/20 transition-all duration-200 hover-elevate cursor-pointer">
                      <h4 className="font-semibold mb-1">Tool Execution</h4>
                      <p className="text-sm text-muted-foreground">Execute in containerized sandbox → Return observation → Continue or summarize</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-3">
                Figure 2: Complete inference pipeline showing hierarchical orchestration with dynamic LoRA adapter loading
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center" data-testid="text-results-heading">
            Key Results
          </h2>
          
          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 md:p-8 border border-card-border">
              <h3 className="text-xl font-semibold mb-4">Performance on MCP-Bench</h3>
              <p className="text-muted-foreground mb-6">
                AgentFlux delivers significantly higher accuracy compared to off-the-shelf local LLMs. On the MCP-Bench benchmark for file manipulations, <strong>AgentFlux improves the base model accuracy from 16% to 61.5%</strong>, approaching GPT-5-mini's 88.5% accuracy.
              </p>
              
              <div className="overflow-x-auto">
                <Table data-testid="table-baseline-results">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Model</TableHead>
                      <TableHead className="font-semibold text-center">ToolFit (%)</TableHead>
                      <TableHead className="font-semibold text-center">Reasoning</TableHead>
                      <TableHead className="font-semibold text-center">Frontier</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Qwen-2.5-7B</TableCell>
                      <TableCell className="text-center">16.0</TableCell>
                      <TableCell className="text-center">No</TableCell>
                      <TableCell className="text-center">No</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Qwen-3-8B*</TableCell>
                      <TableCell className="text-center">34.2</TableCell>
                      <TableCell className="text-center">No</TableCell>
                      <TableCell className="text-center">No</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Llama-3.1-8B</TableCell>
                      <TableCell className="text-center">42.4</TableCell>
                      <TableCell className="text-center">No</TableCell>
                      <TableCell className="text-center">No</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">xLAM-2-8B</TableCell>
                      <TableCell className="text-center">15.8</TableCell>
                      <TableCell className="text-center">No</TableCell>
                      <TableCell className="text-center">No</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Qwen-3-8B</TableCell>
                      <TableCell className="text-center">52.3</TableCell>
                      <TableCell className="text-center">Yes</TableCell>
                      <TableCell className="text-center">No</TableCell>
                    </TableRow>
                    <TableRow className="bg-accent/20">
                      <TableCell className="font-medium">GPT-5-mini</TableCell>
                      <TableCell className="text-center font-bold">88.5</TableCell>
                      <TableCell className="text-center">-</TableCell>
                      <TableCell className="text-center">Yes</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="mt-8" data-testid="chart-baseline-performance">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={baselineChartData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="model" 
                      angle={-45} 
                      textAnchor="end" 
                      height={100}
                      className="text-xs fill-foreground"
                    />
                    <YAxis 
                      label={{ value: 'ToolFit Accuracy (%)', angle: -90, position: 'insideLeft' }}
                      className="fill-foreground"
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--card-border))',
                        borderRadius: '0.5rem',
                        color: 'hsl(var(--foreground))'
                      }}
                    />
                    <Bar dataKey="toolFit" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 md:p-8 border border-card-border">
              <h3 className="text-xl font-semibold mb-4">Decoupled Analysis</h3>
              <p className="text-muted-foreground mb-6">
                The performance bottleneck is primarily in tool selection. Tool selection and argument generation fundamentally differ in their nature and benefit from different optimizations.
              </p>
              
              <div className="overflow-x-auto">
                <Table data-testid="table-decoupled-analysis">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Tool Selection Model</TableHead>
                      <TableHead className="font-semibold">Argument Generation Model</TableHead>
                      <TableHead className="font-semibold text-center">ToolFit (%)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Qwen-2.5-7B</TableCell>
                      <TableCell>Qwen-2.5-7B</TableCell>
                      <TableCell className="text-center">16.0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Qwen-2.5-7B</TableCell>
                      <TableCell>GPT-5-mini</TableCell>
                      <TableCell className="text-center">28.8</TableCell>
                    </TableRow>
                    <TableRow className="bg-primary/10">
                      <TableCell className="font-medium">GPT-5-mini</TableCell>
                      <TableCell>Qwen-2.5-7B</TableCell>
                      <TableCell className="text-center font-bold">60.8</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>GPT-5-mini</TableCell>
                      <TableCell>GPT-5-mini</TableCell>
                      <TableCell className="text-center">88.5</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="mt-8" data-testid="chart-decoupled-analysis">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={decoupledChartData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="config" 
                      angle={-45} 
                      textAnchor="end" 
                      height={100}
                      className="text-xs fill-foreground"
                    />
                    <YAxis 
                      label={{ value: 'ToolFit Accuracy (%)', angle: -90, position: 'insideLeft' }}
                      className="fill-foreground"
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--card-border))',
                        borderRadius: '0.5rem',
                        color: 'hsl(var(--foreground))'
                      }}
                    />
                    <Bar dataKey="toolFit" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 md:p-8 border border-card-border">
              <h3 className="text-xl font-semibold mb-4">AgentFlux Performance Across Applications</h3>
              <p className="text-muted-foreground mb-6">
                DualTuneModel-7B (AgentFlux with Qwen-2.5-7B) was evaluated on multiple real-world applications including Filesystem, Monday.com, and Notion integrations.
              </p>
              
              <div className="overflow-x-auto">
                <Table data-testid="table-application-results">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Model</TableHead>
                      <TableHead className="font-semibold text-center">Filesystem</TableHead>
                      <TableHead className="font-semibold text-center">Monday</TableHead>
                      <TableHead className="font-semibold text-center">Notion</TableHead>
                      <TableHead className="font-semibold text-center">Reasoning</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="bg-primary/10">
                      <TableCell className="font-bold">DualTuneModel-7B</TableCell>
                      <TableCell className="text-center font-bold">61.5%</TableCell>
                      <TableCell className="text-center font-bold">43.2%</TableCell>
                      <TableCell className="text-center font-bold">71.8%</TableCell>
                      <TableCell className="text-center">No</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Qwen-2.5-7B</TableCell>
                      <TableCell className="text-center">15.0%</TableCell>
                      <TableCell className="text-center">19.2%</TableCell>
                      <TableCell className="text-center">33.4%</TableCell>
                      <TableCell className="text-center">No</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Qwen-3-32B-Quant</TableCell>
                      <TableCell className="text-center">58.6%</TableCell>
                      <TableCell className="text-center">37.0%</TableCell>
                      <TableCell className="text-center">85.6%</TableCell>
                      <TableCell className="text-center">Yes</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>GPT-5-mini</TableCell>
                      <TableCell className="text-center">88.4%</TableCell>
                      <TableCell className="text-center">76.4%</TableCell>
                      <TableCell className="text-center">91.6%</TableCell>
                      <TableCell className="text-center">-</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="mt-8" data-testid="chart-application-performance">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={applicationChartData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="model" 
                      angle={-30} 
                      textAnchor="end" 
                      height={90}
                      className="text-xs fill-foreground"
                    />
                    <YAxis 
                      label={{ value: 'Accuracy (%)', angle: -90, position: 'insideLeft' }}
                      className="fill-foreground"
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--card-border))',
                        borderRadius: '0.5rem',
                        color: 'hsl(var(--foreground))'
                      }}
                    />
                    <Legend />
                    <Bar dataKey="filesystem" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Filesystem" />
                    <Bar dataKey="monday" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} name="Monday.com" />
                    <Bar dataKey="notion" fill="hsl(217 91% 70%)" radius={[4, 4, 0, 0]} name="Notion" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 space-y-2">
                <p className="text-sm"><strong>Key Highlights:</strong></p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>AgentFlux improves tool-calling accuracy by up to <strong>60%</strong> over the base model</li>
                  <li>Matches or exceeds reasoning models <strong>2× its size</strong>, but with lower latency</li>
                  <li>Decoupled fine-tuning <strong>doubles improvement</strong> over traditional fine-tuning on the same dataset</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decoupled Fine-Tuning Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center" data-testid="text-finetuning-heading">
            The Core Idea: Decoupled Fine-Tuning
          </h2>
          
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 md:p-8 border border-card-border">
              <p className="text-base leading-relaxed mb-6">
                AgentFlux (also known as DualTune) introduces <strong>decoupled fine-tuning</strong>, a two-stage post-training method that isolates the subtasks of tool calling into specialized components.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">1. Tool Selection Adapter</h4>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Trained as a classifier that identifies which tool to call next</li>
                    <li>Uses loss masking to optimize only over the tool name tokens</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">2. Argument Generation Adapter</h4>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Trained individually for each tool to generate well-structured arguments</li>
                    <li>Uses masking over argument tokens only, ensuring syntactic precision</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent/20 rounded-lg border border-accent-border">
                <p className="text-sm">
                  Each adapter is a lightweight <strong>LoRA module</strong>, enabling fast swap-in/out at inference time. The dataset pipeline automatically generates synthetic tool-calling traces using GPT-5-mini, producing balanced and diverse data across all tools.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 md:p-8 border border-card-border">
              <Accordion type="single" collapsible className="w-full" data-testid="accordion-technical-details">
                <AccordionItem value="hierarchical-orchestration">
                  <AccordionTrigger className="text-xl font-semibold">
                    Hierarchical Orchestration for Scalability
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-4">
                      To handle large toolsets without overwhelming the attention span of local models, AgentFlux employs hierarchical orchestration:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Toolset Selection (High-Level Routing)</h4>
                          <p className="text-sm text-muted-foreground">The base model decides which toolset (e.g., Filesystem, Notion, Monday.com) is relevant.</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Tool Selection (Within Toolset)</h4>
                          <p className="text-sm text-muted-foreground">A specialized LoRA adapter for that toolset selects the exact tool to invoke.</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Argument Generation</h4>
                          <p className="text-sm text-muted-foreground">The LoRA adapter for the chosen tool generates its arguments.</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-sm">
                        This hierarchy <strong>shortens context length, improves accuracy, and allows the system to scale to dozens of tools</strong> without slowing down inference.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="dataset-pipeline">
                  <AccordionTrigger className="text-xl font-semibold">
                    Dataset Generation Pipeline
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-4">
                      AgentFlux uses an automated synthetic data generation pipeline powered by frontier models to create high-quality training examples:
                    </p>
                    
                    <div className="space-y-3">
                      <div className="bg-accent/10 rounded-lg p-4 border border-accent-border">
                        <h4 className="font-semibold mb-2">Tool-Calling Trace Generation</h4>
                        <p className="text-sm text-muted-foreground">GPT-5-mini generates complete workflows with correct tool selections and arguments for each application domain.</p>
                      </div>
                      
                      <div className="bg-accent/10 rounded-lg p-4 border border-accent-border">
                        <h4 className="font-semibold mb-2">Balanced Coverage</h4>
                        <p className="text-sm text-muted-foreground">Automated sampling ensures all tools receive proportional training examples, preventing bias toward frequently-used tools.</p>
                      </div>
                      
                      <div className="bg-accent/10 rounded-lg p-4 border border-accent-border">
                        <h4 className="font-semibold mb-2">Quality Filtering</h4>
                        <p className="text-sm text-muted-foreground">Validation checks ensure syntactic correctness and semantic relevance of generated tool calls.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center" data-testid="text-impact-heading">
            Why It Matters
          </h2>
          
          <div className="bg-card rounded-lg p-6 md:p-8 border border-card-border">
            <p className="text-lg leading-relaxed mb-6">
              AgentFlux bridges the performance gap between frontier orchestration models and local deployable systems.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="mb-2">
                  <Lock className="h-8 w-8 text-primary" data-testid="icon-privacy" />
                </div>
                <h3 className="font-semibold">Privacy-Preserving AI</h3>
                <p className="text-sm text-muted-foreground">Agents that run fully offline, protecting sensitive user data</p>
              </div>
              
              <div className="space-y-2">
                <div className="mb-2">
                  <Zap className="h-8 w-8 text-primary" data-testid="icon-efficiency" />
                </div>
                <h3 className="font-semibold">Efficient Orchestration</h3>
                <p className="text-sm text-muted-foreground">No reasoning latency overhead, fast execution on consumer hardware</p>
              </div>
              
              <div className="space-y-2">
                <div className="mb-2">
                  <Wrench className="h-8 w-8 text-primary" data-testid="icon-scalable" />
                </div>
                <h3 className="font-semibold">Scalable & Modular</h3>
                <p className="text-sm text-muted-foreground">Training for tool ecosystems that evolve over time</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-base font-medium text-center">
                By decoupling fine-tuning and introducing dynamic adapter loading, <strong>AgentFlux democratizes agentic AI</strong>, bringing practical autonomy to the edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section id="citation" className="py-12 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center" data-testid="text-citation-heading">
            Citation
          </h2>
          
          <div className="bg-card rounded-lg p-6 md:p-8 border border-card-border max-w-3xl mx-auto">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold">BibTeX</h3>
              <Button
                onClick={handleCopyBibtex}
                size="sm"
                variant="outline"
                className="gap-2"
                data-testid="button-copy-bibtex"
              >
                {copiedBibtex ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm font-mono" data-testid="text-bibtex">
{`@article{agentflux2024,
  title={AgentFlux: A Framework for Privacy-Preserving On-Device Agentic Systems},
  author={[Authors to be added]},
  journal={arXiv preprint arXiv:2510.00229},
  year={2024}
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
          <p>AgentFlux: Privacy-Preserving On-Device Agentic Systems</p>
          <p className="mt-2">
            Paper: <a href="https://arxiv.org/abs/2510.00229" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">arXiv:2510.00229</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
