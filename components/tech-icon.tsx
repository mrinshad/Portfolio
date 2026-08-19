import * as React from "react"
import {
  Code2,
  Database,
  Server,
  Cloud,
  Terminal,
  Layers,
  Cpu,
  GitBranch,
  Box,
  Palette,
  Network,
  Workflow,
  Shield,
  FileCode,
  HardDrive,
  Globe,
  Zap,
} from "lucide-react"

interface TechIconProps {
  name: string
  className?: string
}

export function TechIcon({ name, className = "h-4 w-4" }: TechIconProps) {
  const normalized = name.toLowerCase()

  if (normalized.includes("react")) {
    return <Code2 className={className} />
  }
  if (normalized.includes("next")) {
    return <Zap className={className} />
  }
  if (normalized.includes("typescript") || normalized.includes("javascript")) {
    return <FileCode className={className} />
  }
  if (normalized.includes("node") || normalized.includes("express")) {
    return <Server className={className} />
  }
  if (normalized.includes(".net") || normalized.includes("java")) {
    return <Cpu className={className} />
  }
  if (
    normalized.includes("postgres") ||
    normalized.includes("sql") ||
    normalized.includes("sqlite") ||
    normalized.includes("database") ||
    normalized.includes("prisma") ||
    normalized.includes("supabase")
  ) {
    return <Database className={className} />
  }
  if (
    normalized.includes("azure") ||
    normalized.includes("gcp") ||
    normalized.includes("cloud") ||
    normalized.includes("google")
  ) {
    return <Cloud className={className} />
  }
  if (normalized.includes("linux") || normalized.includes("terminal")) {
    return <Terminal className={className} />
  }
  if (normalized.includes("docker") || normalized.includes("container")) {
    return <Box className={className} />
  }
  if (
    normalized.includes("git") ||
    normalized.includes("action") ||
    normalized.includes("ci/cd")
  ) {
    return <GitBranch className={className} />
  }
  if (
    normalized.includes("tailwind") ||
    normalized.includes("material") ||
    normalized.includes("shadcn") ||
    normalized.includes("ui")
  ) {
    return <Palette className={className} />
  }
  if (normalized.includes("api") || normalized.includes("network")) {
    return <Network className={className} />
  }
  if (normalized.includes("system") || normalized.includes("architecture")) {
    return <Workflow className={className} />
  }
  if (normalized.includes("auth") || normalized.includes("rbac")) {
    return <Shield className={className} />
  }

  return <Layers className={className} />
}
