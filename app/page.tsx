import Link from "next/link"
import { ArrowRight, BookOpen, Brain, CheckCircle, MessageSquare, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <>
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
                <CardTitle>Comprehensive Course Library</CardTitle>
                <CardDescription>
                  Access a vast library of courses and learning materials covering a wide range of subjects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Thousands of courses</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Expert-led content</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Regularly updated materials</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Collaborative Learning</CardTitle>
                <CardDescription>
                  Connect with fellow learners and experts to share knowledge and collaborate on projects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Community forums</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Group projects</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Expert Q&A sessions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Students Are Saying
            </h2>
            <p className="mt-4 text-xl text-muted-foreground md:w-3/4 mx-auto">
              Real stories from students who have transformed their learning experience with Navshiksha.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="text-lg">
                  "Navshiksha has completely changed the way I learn. The AI tutor is incredibly helpful, and the
                  personalized learning paths have made a huge difference in my grades."
                </p>
                <div className="flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Sarah L.</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="text-lg">
                  "I love the flexibility of Navshiksha. I can learn at my own pace and access a wide range of courses
                  from anywhere in the world. The community support is also fantastic!"
                </p>
                <div className="flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">David K.</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-xl text-muted-foreground md:w-3/4 mx-auto">
              Choose the plan that fits your learning needs and budget
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Personal Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Personal</CardTitle>
                <div className="mt-4 flex items-baseline text-5xl font-bold">
                  ₹250<span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-4">
                  Perfect for individual students looking for basic support
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
                    <span>3 subjects</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Basic progress tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>50 AI tutor questions/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full" asChild>
                  <Link href="/login?tab=signup">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-primary relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle>Premium</CardTitle>
                <div className="mt-4 flex items-baseline text-5xl font-bold">
                  ₹2,000<span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
                </div>
                <CardDescription className="mt-4">Comprehensive support for serious students</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Access to advanced AI tutor</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>All subjects</span>
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
                    <span>4 hours of human tutor sessions/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Document & image analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full" asChild>
                  <Link href="/login?tab=signup">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <div className="mt-4 flex items-baseline text-5xl font-bold">
                  Custom<span className="ml-1 text-xl font-normal text-muted-foreground">pricing</span>
                </div>
                <CardDescription className="mt-4">For schools, colleges, and educational institutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Everything in Premium</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom number of user accounts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Bulk discounts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Analytics dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>24/7 premium support</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">All plans include a 7-day free trial. No credit card required.</p>
            <p className="text-muted-foreground mt-2">
              Need help choosing the right plan?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="mt-4 text-xl text-muted-foreground md:w-3/4 mx-auto">
            Join Navshiksha today and unlock your full potential with AI-powered personalized learning.
          </p>
          
        </div>
      </section>
    </>
  )
}
