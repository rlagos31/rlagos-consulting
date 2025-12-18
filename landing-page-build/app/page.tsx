"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function RLagosConsultingPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setScrollProgress(latest)
    })
  }, [scrollYProgress])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="scroll-smooth dark">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 z-50 origin-left"
        style={{ scaleX: scrollProgress }}
      />

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-white tracking-tight">RLagos Consulting</div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                onClick={(e) => handleSmoothScroll(e, "services")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a
                href="#experience"
                onClick={(e) => handleSmoothScroll(e, "experience")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </a>
              <a
                href="#process"
                onClick={(e) => handleSmoothScroll(e, "process")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Process
              </a>
              <a
                href="#results"
                onClick={(e) => handleSmoothScroll(e, "results")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Results
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <Button
                size="sm"
                className="rounded-full"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById("contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Book a 15-min call
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              Clean systems.
              <br />
              Secure foundation.
              <br />
              <span className="text-muted-foreground">Done right.</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Consulting informed by NASA-grade environments for teams who need Atlassian, cloud, and on-prem systems clean, locked down, and audit ready.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full">
                Get a quick audit
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                See services
              </Button>
            </div>
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex flex-col">
                <span className="font-semibold text-foreground">5 years</span>
                <span>supporting NASA environments</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground">Expert</span>
                <span>Jira/Confluence administration</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground">Experienced</span>
                <span>Cloud + security + compliance</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1">
              <div className="w-full h-full rounded-3xl bg-muted/50 flex items-center justify-center">
                {/* Replace this placeholder with your actual headshot */}
               <img src="/rlagos-picture.jpeg" alt="RLagos" className="w-full h-full object-cover rounded-3xl" /> 
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="container mx-auto px-6 py-24 md:py-32 bg-muted/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">What you get</h2>
          <p className="text-xl text-muted-foreground mb-12 text-pretty">
            Clear deliverables designed to reduce risk and improve team efficiency.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <DeliverableItem icon="🔒" title="Jira permissions map + least-privilege recommendations" />
            <DeliverableItem icon="🧹" title="Cleanup plan (phased, low-risk)" />
            <DeliverableItem icon="✅" title="Workflow simplification checklist" />
            <DeliverableItem icon="💰" title="License usage review + optimization notes" />
            <DeliverableItem icon="🛡️" title="Security hardening recommendations" />
            <DeliverableItem icon="📖" title="Handoff runbook (what changed + how to maintain)" />
          </div>
        </motion.div>
      </section>

      {/* Scroll Story / Sticky Feature Reveal */}
      <ScrollStory />

      {/* Services Section */}
      <section id="services" className="container mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Services</h2>
          <p className="text-xl text-muted-foreground mb-12 text-pretty">
            Specialized consulting for Atlassian tools and cybersecurity compliance.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Jira & Atlassian</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ServiceCard
                  title="Permissions audit"
                  description="Review and optimize user access across projects and spaces"
                />
                <ServiceCard
                  title="Workflow cleanup"
                  description="Streamline complex workflows and remove technical debt"
                />
                <ServiceCard
                  title="License optimization"
                  description="Right-size your Atlassian spend and eliminate waste"
                />
                <ServiceCard
                  title="Upgrade readiness"
                  description="Plan and execute major version migrations with confidence"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Cybersecurity & Compliance</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ServiceCard
                  title="NIST/RMF readiness support"
                  description="Prepare your systems for Risk Management Framework assessments"
                />
                <ServiceCard
                  title="POA&M support"
                  description="Track and remediate Plans of Action and Milestones effectively"
                />
                <ServiceCard
                  title="Cloud access/logging review"
                  description="Audit cloud configurations for security and compliance gaps"
                />
                <ServiceCard
                  title="Security documentation"
                  description="Create clear, audit-ready security and compliance documentation"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* NASA Credibility Section */}
      <section id="experience" className="container mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Built for high-stakes environments.</h2>
          <p className="text-xl text-muted-foreground mb-12 text-pretty">
            5 years supporting NASA environments has taught me what matters: precision, documentation, and
            zero-tolerance for shortcuts.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Production change-control mindset</h3>
                <p className="text-sm text-muted-foreground">
                  Every change is planned, tested, and reversible. No surprises in production.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Documentation-first, audit-ready deliverables</h3>
                <p className="text-sm text-muted-foreground">
                  Clear runbooks and documentation that pass auditor scrutiny and help your team succeed.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Calm troubleshooting + least privilege</h3>
                <p className="text-sm text-muted-foreground">
                  Security through minimal access and methodical problem-solving. No panic, just process.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section id="process" className="container mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">How it works</h2>
          <p className="text-xl text-muted-foreground mb-12 text-pretty">
            A simple three-step process that delivers value quickly.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <SimpleProcessStep
              number="01"
              title="Discovery"
              description="Deep dive into your current setup, pain points, and compliance requirements. Identify quick wins and long-term improvements."
            />
            <SimpleProcessStep
              number="02"
              title="Cleanup/Hardening"
              description="Execute the plan with minimal disruption. Remove permission sprawl, streamline workflows, and lock down access using least-privilege principles."
            />
            <SimpleProcessStep
              number="03"
              title="Handoff"
              description="Deliver clear runbooks and documentation so your team can maintain improvements long-term. No mystery processes, just clean systems."
            />
          </div>
        </motion.div>
      </section>

      {/* Results Section */}
      <section id="results" className="container mx-auto px-6 py-24 md:py-32 bg-muted/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-center">Real outcomes</h2>
          <p className="text-xl text-muted-foreground mb-12 text-pretty text-center">
            What you can expect after working together.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <OutcomeCard
              title="Reduced permission sprawl"
              description="Clean, documented access controls that follow least-privilege principles. No more mystery admins or forgotten permissions."
            />
            <OutcomeCard
              title="Faster onboarding/offboarding"
              description="Streamlined workflows mean new team members get up to speed quickly, and departing users lose access properly."
            />
            <OutcomeCard
              title="Less admin friction + clearer workflows"
              description="Simplified processes that your team can actually follow. No more workarounds or confusion about how to get things done."
            />
            <OutcomeCard
              title="More audit-ready posture"
              description="Documentation and controls that satisfy auditors without last-minute scrambling. Sleep better before compliance reviews."
            />
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance">What clients say</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <TestimonialCard
              quote="The Jira cleanup transformed our workflow. What used to take hours now takes minutes. The documentation alone was worth the investment."
              author="Sarah Chen"
              role="Engineering Lead"
            />
            <TestimonialCard
              quote="Finally, someone who understands both the technical side and the compliance requirements. Our audit went smoothly thanks to the prep work."
              author="Marcus Williams"
              role="IT Manager"
            />
            <TestimonialCard
              quote="Professional, thorough, and zero drama. The permissions audit caught issues we didn't even know we had. Highly recommend."
              author="Jennifer Martinez"
              role="Security Officer"
            />
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">Let's talk about your needs</h2>
          <p className="text-xl text-muted-foreground mb-12 text-center text-pretty">
            Reach out for a quick consultation or email directly at{" "}
            <a href="mailto:contact@rlagosconsulting.com" className="text-foreground hover:underline">
              contact@rlagosconsulting.com
            </a>
          </p>

          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardContent className="pt-6">
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} RLagos Consulting. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="#services"
                onClick={(e) => handleSmoothScroll(e, "services")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a
                href="#experience"
                onClick={(e) => handleSmoothScroll(e, "experience")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Scroll Story Component with Sticky Sections
function ScrollStory() {
  const { scrollYProgress } = useScroll()
  const chapter1Progress = useTransform(scrollYProgress, [0.12, 0.20, 0.28], [0, 1, 0])
  const chapter2Progress = useTransform(scrollYProgress, [0.28, 0.36, 0.44], [0, 1, 0])
  const chapter3Progress = useTransform(scrollYProgress, [0.44, 0.52, 0.60], [0, 1, 0])


  return (
    <div className="relative bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
      <div className="container mx-auto px-6 py-32">
        <div className="sticky top-32 min-h-[70vh] flex items-center justify-center">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">
            <StoryChapter
              title="Unclutter Jira"
              description="Too many projects, permissions, and workflows? I'll audit your Jira instance, remove the bloat, and create a clean structure your team can actually use."
              visual={<JiraVisual />}
              progress={chapter1Progress}
            />
          </div>
        </div>

        <div className="sticky top-32 min-h-[70vh] flex items-center justify-center">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">
            <StoryChapter
              title="Lock down access"
              description="Least privilege isn't just a buzzword. I'll review your permissions, close security gaps, and document everything so auditors stay happy."
              visual={<SecurityVisual />}
              progress={chapter2Progress}
            />
          </div>
        </div>

        <div className="sticky top-32 min-h-[70vh] flex items-center justify-center">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">
            <StoryChapter
              title="Make audits boring"
              description="Audit prep shouldn't be stressful. I'll create the documentation, runbooks, and evidence your compliance team needs—before they ask for it."
              visual={<AuditVisual />}
              progress={chapter3Progress}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function StoryChapter({
  title,
  description,
  visual,
  progress,
}: {
  title: string
  description: string
  visual: React.ReactNode
  progress: any
}) {
  const opacity = useTransform(progress, [0, 0.25, 0.75, 1], [0, 1, 1, 0])
  const y = useTransform(progress, [0, 0.15, 0.85, 1], [18, 0, 0, -18])
  const scale = useTransform(progress, [0, 0.15, 0.85, 1], [0.98, 1, 1, 0.98])

  // prevents invisible layers from blocking the next chapter
  const pointerEvents = useTransform(progress, [0, 0.05, 0.95, 1], ["none", "auto", "auto", "none"])


  return (
    <motion.div style={{ opacity,y, scale, pointerEvents }} className="grid md:grid-cols-2 gap-12 items-center w-full will-change-transform">
      <div className="space-y-4">
        <h3 className="text-3xl md:text-4xl font-bold text-balance">{title}</h3>
        <p className="text-lg text-muted-foreground text-pretty">{description}</p>
      </div>
      <div className="flex justify-center">{visual}</div>
    </motion.div>
  )
}

// Abstract Visuals for Story Chapters
function JiraVisual() {
  return (
    <div className="relative w-64 h-64">
      <motion.div
        className="absolute inset-0 grid grid-cols-3 gap-2 p-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="rounded-lg bg-blue-500/20 border border-blue-500/30"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
          />
        ))}
      </motion.div>
    </div>
  )
}

function SecurityVisual() {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      <motion.div
        className="w-32 h-32 rounded-2xl bg-purple-500/20 border-2 border-purple-500/50 flex items-center justify-center"
        initial={{ rotate: 0 }}
        whileInView={{ rotate: 360 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <svg className="w-16 h-16 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </motion.div>
    </div>
  )
}

function AuditVisual() {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="h-3 rounded-full bg-green-500/30"
            initial={{ width: 0 }}
            whileInView={{ width: `${200 - i * 30}px` }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          />
        ))}
      </motion.div>
    </div>
  )
}

// Service Card Component
function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-border transition-colors">
        <CardContent className="pt-6">
          <h4 className="text-lg font-semibold mb-2">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Process Step Component
function SimpleProcessStep({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="h-full bg-card/50 backdrop-blur border-border/50">
        <CardContent className="pt-6">
          <div className="text-5xl font-bold text-blue-500/20 mb-4">{number}</div>
          <h3 className="text-2xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Testimonial Card Component
function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card className="h-full bg-card/50 backdrop-blur border-border/50">
        <CardContent className="pt-6">
          <p className="text-sm mb-4 text-pretty">&ldquo;{quote}&rdquo;</p>
          <div className="border-t border-border pt-4">
            <div className="font-semibold">{author}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { name?: string; email?: string; message?: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log("[v0] Form submitted:", formData)
    alert("Thank you! Your message has been sent.")
    setFormData({ name: "", email: "", message: "" })
    setErrors({})
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={errors.name ? "border-destructive" : ""}
        />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
      </div>
      <div>
        <Input
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
      </div>
      <div>
        <Textarea
          placeholder="Tell me about your needs..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
      </div>
      <Button type="submit" size="lg" className="w-full rounded-full">
        Send message
      </Button>
    </form>
  )
}

// DeliverableItem component
function DeliverableItem({ icon, title }: { icon: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-start gap-3 p-4 rounded-lg bg-card/30 backdrop-blur border border-border/50"
    >
      <span className="text-2xl">{icon}</span>
      <p className="text-sm font-medium">{title}</p>
    </motion.div>
  )
}

// OutcomeCard component
function OutcomeCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
    >
      <Card className="h-full bg-card/50 backdrop-blur border-border/50">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
            <h3 className="text-xl font-semibold flex-1">{title}</h3>
          </div>
          <p className="text-sm text-muted-foreground pl-5">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
