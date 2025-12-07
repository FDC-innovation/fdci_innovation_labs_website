"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, CheckCircle2, ArrowRight, ArrowLeft, Loader2, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const bookingSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    company: z.string().optional(),
    serviceType: z.string().min(1, "Please select a service type"),
    preferredDate: z.string().min(1, "Please select a preferred date"),
    message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const serviceTypes = [
    "Web Development",
    "AI Integration",
    "Cloud Solutions",
    "Salesforce",
    "API Development",
    "Training Program",
    "Other",
];

const steps = [
    { id: 1, title: "Service", description: "Choose your service" },
    { id: 2, title: "Schedule", description: "Pick a date & time" },
    { id: 3, title: "Details", description: "Your information" },
];

export function EnhancedBookingFlow() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
        watch,
        trigger,
    } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
    });

    const onSubmit = async (data: BookingFormData) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form data:", data);
        setIsSubmitted(true);
    };

    const nextStep = async () => {
        let isValid = false;

        if (currentStep === 1) {
            isValid = await trigger("serviceType");
        } else if (currentStep === 2) {
            isValid = await trigger("preferredDate");
        }

        if (isValid || currentStep === 3) {
            setCurrentStep((prev) => Math.min(prev + 1, 3));
        }
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    if (isSubmitted) {
        return (
            <div className="py-20 min-h-[80vh] flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="container-custom max-w-2xl"
                >
                    <Card className="glass-strong text-center relative overflow-hidden">
                        {/* Celebration Animation */}
                        <div className="absolute inset-0 pointer-events-none">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-primary rounded-full"
                                    initial={{
                                        x: "50%",
                                        y: "50%",
                                        scale: 0,
                                    }}
                                    animate={{
                                        x: `${Math.random() * 100}%`,
                                        y: `${Math.random() * 100}%`,
                                        scale: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        delay: i * 0.05,
                                        ease: "easeOut",
                                    }}
                                />
                            ))}
                        </div>

                        <CardContent className="p-12 relative z-10">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6 shadow-2xl"
                            >
                                <CheckCircle2 className="w-12 h-12 text-primary-foreground" />
                            </motion.div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                You're All Set! 🎉
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Your consultation request has been received. Our team will reach out within 24 hours to confirm your appointment.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild className="glow-blue">
                                    <a href="/">Return to Home</a>
                                </Button>
                                <Button asChild variant="outline" className="glass">
                                    <a href="/services">Explore Services</a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="py-20">
            {/* Hero Section */}
            <section className="container-custom mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-strong border border-primary/30 mb-6">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Free 30-Minute Consultation</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Book Your Free <span className="gradient-text">Consultation</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        Let's discuss your project and find the perfect solution for your needs
                    </p>
                </motion.div>
            </section>

            {/* Progress Steps */}
            <section className="container-custom mb-12">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-between">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex items-center flex-1">
                                <div className="flex flex-col items-center flex-1">
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${currentStep >= step.id
                                                ? "bg-gradient-primary text-primary-foreground shadow-lg scale-110"
                                                : "bg-muted text-muted-foreground"
                                            }`}
                                    >
                                        {step.id}
                                    </div>
                                    <div className="mt-2 text-center">
                                        <div className="text-sm font-medium">{step.title}</div>
                                        <div className="text-xs text-muted-foreground hidden sm:block">
                                            {step.description}
                                        </div>
                                    </div>
                                </div>
                                {index < steps.length - 1 && (
                                    <div
                                        className={`h-1 flex-1 mx-4 rounded-full transition-all duration-300 ${currentStep > step.id ? "bg-primary" : "bg-muted"
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <Card className="glass-strong">
                        <CardContent className="p-8 md:p-12">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Step 1: Service Selection */}
                                {currentStep === 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <Label htmlFor="serviceType" className="text-lg font-semibold">
                                                What service are you interested in? *
                                            </Label>
                                            <Select
                                                onValueChange={(value) => setValue("serviceType", value)}
                                                defaultValue={watch("serviceType")}
                                            >
                                                <SelectTrigger className="mt-3 h-12">
                                                    <SelectValue placeholder="Select a service" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {serviceTypes.map((service) => (
                                                        <SelectItem key={service} value={service}>
                                                            {service}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.serviceType && (
                                                <p className="text-sm text-destructive mt-2">
                                                    {errors.serviceType.message}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 2: Date Selection */}
                                {currentStep === 2 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <Label htmlFor="preferredDate" className="text-lg font-semibold">
                                                When would you like to meet? *
                                            </Label>
                                            <div className="relative mt-3">
                                                <Input
                                                    id="preferredDate"
                                                    type="date"
                                                    {...register("preferredDate")}
                                                    min={new Date().toISOString().split("T")[0]}
                                                    className="h-12"
                                                />
                                                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                                            </div>
                                            {errors.preferredDate && (
                                                <p className="text-sm text-destructive mt-2">
                                                    {errors.preferredDate.message}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 3: Contact Details */}
                                {currentStep === 3 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <Label htmlFor="name">Full Name *</Label>
                                            <Input
                                                id="name"
                                                {...register("name")}
                                                placeholder="John Doe"
                                                className="mt-2 h-12"
                                            />
                                            {errors.name && (
                                                <p className="text-sm text-destructive mt-1">
                                                    {errors.name.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <Label htmlFor="email">Email Address *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                {...register("email")}
                                                placeholder="john@example.com"
                                                className="mt-2 h-12"
                                            />
                                            {errors.email && (
                                                <p className="text-sm text-destructive mt-1">
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <Label htmlFor="phone">Phone Number *</Label>
                                            <Input
                                                id="phone"
                                                {...register("phone")}
                                                placeholder="+91 98765 43210"
                                                className="mt-2 h-12"
                                            />
                                            {errors.phone && (
                                                <p className="text-sm text-destructive mt-1">
                                                    {errors.phone.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <Label htmlFor="company">Company / Organization</Label>
                                            <Input
                                                id="company"
                                                {...register("company")}
                                                placeholder="Your Company Name"
                                                className="mt-2 h-12"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="message">Additional Message</Label>
                                            <Textarea
                                                id="message"
                                                {...register("message")}
                                                placeholder="Tell us more about your project..."
                                                rows={4}
                                                className="mt-2"
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
                                    {currentStep > 1 && (
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={prevStep}
                                            className="glass"
                                        >
                                            <ArrowLeft className="mr-2 w-4 h-4" />
                                            Previous
                                        </Button>
                                    )}

                                    {currentStep < 3 ? (
                                        <Button
                                            type="button"
                                            onClick={nextStep}
                                            className="glow-blue ml-auto"
                                        >
                                            Next Step
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    ) : (
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="glow-blue ml-auto"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    Book Consultation
                                                    <CheckCircle2 className="ml-2 w-4 h-4" />
                                                </>
                                            )}
                                        </Button>
                                    )}
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </section>
        </div>
    );
}
