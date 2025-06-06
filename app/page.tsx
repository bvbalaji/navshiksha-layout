import Link from "next/link"
import { ArrowRight, BookOpen, Brain, CheckCircle, Clock, Lightbulb, MessageSquare, Star, Users, X } from "lucide-react"

import { BrandLogo } from "@/components/brand-logo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container flex flex-col items-center text-center">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <div className="space-y-4 md:w-3/4">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Personalized Learning, Powered by AI
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Your Personal AI Tutor for Academic Excellence
              </h1>
              <p className="text-xl text-muted-foreground md:w-3/4 md:mx-auto">
                Navshiksha combines cutting-edge AI with personalized learning to help students master any subject at
                their own pace.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center pt-4">
                <Button size="lg" asChild>
                  <Link href="/login?tab=signup">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-t border-b bg-muted/40 py-12">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold">10,000+</h3>
                <p className="text-center text-sm text-muted-foreground">Students</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-center text-sm text-muted-foreground">Expert Tutors</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-center text-sm text-muted-foreground">Subjects</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold">95%</h3>
                <p className="text-center text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features for Effective Learning
              </h2>
              <p className="mt-4 text-xl text-muted-foreground md:w-3/4 mx-auto">
                Navshiksha combines AI technology with proven learning methodologies to deliver a comprehensive
                educational experience.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>AI Personal Tutor</CardTitle>
                  <CardDescription>
                    Get instant help and explanations from your AI tutor that adapts to your learning style.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>24/7 availability for questions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Personalized explanations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Adaptive learning paths</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Comprehensive Courses</CardTitle>
                  <CardDescription>
                    Access a wide range of subjects with structured learning materials and interactive content.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>50+ academic subjects</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Interactive exercises</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Multimedia learning materials</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Expert Human Tutors</CardTitle>
                  <CardDescription>
                    Connect with qualified teachers for personalized guidance and feedback.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>One-on-one sessions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Verified expert tutors</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Flexible scheduling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Advanced AI Assistance</CardTitle>
                  <CardDescription>
                    Upload documents, images, and complex problems for instant analysis and solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Document analysis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Math problem solving</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Essay feedback and improvement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Personalized Learning</CardTitle>
                  <CardDescription>
                    Track progress and receive customized study plans based on your strengths and weaknesses.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Detailed progress tracking</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Custom study plans</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Skill gap analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Flexible Scheduling</CardTitle>
                  <CardDescription>
                    Learn at your own pace with on-demand content and flexible class scheduling.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>On-demand learning</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Easy class scheduling</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Calendar integration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="border-t py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Navshiksha Works</h2>
              <p className="mt-4 text-xl text-muted-foreground md:w-3/4 mx-auto">
                Our platform makes learning simple, effective, and personalized in just a few steps.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Sign Up & Assessment</h3>
                <p className="text-muted-foreground">
                  Create your account and complete a brief assessment to identify your learning needs and goals.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Learning Plan</h3>
                <p className="text-muted-foreground">
                  Receive a customized study plan based on your assessment results and learning objectives.
                </p>                
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Learn & Progress</h3>
                <p className="text-muted-foreground">
                  Study with AI tutors, attend classes, and track your progress as you master new concepts and skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="border-t py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="mt-4 text-xl text-muted-foreground md:w-3/4 mx-auto">
                Hear from students who have transformed their learning experience with Navshiksha.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div>
                      <CardTitle className="text-lg">Priya Sharma</CardTitle>
                      <CardDescription>High School Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Navshiksha helped me improve my math grades from C to A- in just two months. The AI tutor explains
                    concepts in a way that makes sense to me, and I can ask questions anytime I'm stuck."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div>
                      <CardTitle className="text-lg">Rahul Patel</CardTitle>
                      <CardDescription>College Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "The advanced AI tutor is incredible for complex subjects. I was struggling with quantum physics,
                    but the platform broke down the concepts and provided visualizations that made everything click."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div>
                      <CardTitle className="text-lg">Ananya Gupta</CardTitle>
                      <CardDescription>Parent</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "As a parent, I appreciate how Navshiksha provides detailed progress reports. My daughter loves the
                    interactive learning approach, and her confidence in academics has grown tremendously."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="border-t py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 text-xl text-muted-foreground md:w-3/4 mx-auto">
                Choose the plan that fits your learning needs and goals.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    ₹0<span className="ml-1 text-xl font-normal text-muted-foreground">/ month</span>
                  </div>
                  <CardDescription className="mt-4">
                    Perfect for students looking for basic support in specific subjects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Access to AI tutor (basic)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>1 subject</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-primary" />
                      <span>Progress tracking</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>5 AI tutor questions/month</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Premium</CardTitle>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Most Popular
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    ₹1499<span className="ml-1 text-xl font-normal text-muted-foreground">/ month</span>
                  </div>
                  <CardDescription className="mt-4">
                    Comprehensive support for students serious about academic excellence.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Access to advanced AI tutor</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Unlimited subjects</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Detailed progress analytics</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Unlimited AI tutor questions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>2 hours of human tutor sessions/month</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Document & image analysis</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Platinum</CardTitle>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    ₹3499<span className="ml-1 text-xl font-normal text-muted-foreground">/ month</span>
                  </div>
                  <CardDescription className="mt-4">
                    The complete package for students aiming for top academic performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Everything in Premium</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>8 hours of human tutor sessions/month</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Personalized study plan</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced exam preparation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span>Parent progress reports</span>
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">Get Started</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="border-t py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-xl text-muted-foreground md:w-3/4 mx-auto">
                Find answers to common questions about Navshiksha.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How does the AI tutor work?</h3>
                  <p className="text-muted-foreground">
                    Our AI tutor uses advanced natural language processing to understand your questions and provide
                    personalized explanations. It adapts to your learning style and can explain concepts in multiple
                    ways until you understand.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Can I access Navshiksha on mobile devices?</h3>
                  <p className="text-muted-foreground">
                    Yes, Navshiksha is fully responsive and works on smartphones, tablets, and computers. We also offer
                    dedicated mobile apps for iOS and Android for an optimized experience.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">How qualified are the human tutors?</h3>
                  <p className="text-muted-foreground">
                    All our human tutors have at least a master's degree in their subject area and undergo a rigorous
                    selection process. Many are experienced teachers or industry professionals with a passion for
                    education.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Can I cancel my subscription anytime?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can cancel your subscription at any time. Your access will continue until the end of your
                    current billing period, and you won't be charged again.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Which subjects are covered?</h3>
                  <p className="text-muted-foreground">
                    Navshiksha covers all major academic subjects including Mathematics, Physics, Chemistry, Biology,
                    Computer Science, English, History, Geography, and more. We're constantly adding new subjects based
                    on demand.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-xl font-semibold mb-2">Is there a free tier available?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer a free tier for all new users. You can explore the platform, try the AI tutor,
                    and access limited course content before deciding on a subscription plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="text-xl opacity-90 md:w-3/4 mx-auto mb-8">
              Join thousands of students who are achieving academic excellence with Navshiksha's AI-powered tutoring.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/login?tab=signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
