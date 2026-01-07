"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/hooks/use-toast"

declare global {
  interface Window {
    Razorpay: any
  }
}

export default function NewChallengePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { toast } = useToast()

  const [selectedStep, setSelectedStep] = useState<"1step" | "2step">("2step")
  const [selectedSize, setSelectedSize] = useState("10l")
  const [selectedPlatform, setSelectedPlatform] = useState("zerodha")
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [processing, setProcessing] = useState(false)

  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    city: "",
    zipCode: "",
    couponCode: "",
  })

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia",
    "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
    "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
    "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
    "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
  ]

  const accountSizes = [
    { value: "50k", label: "₹50k", amount: 50000, price2step: 1700, price1step: 2500 },
    { value: "1l", label: "₹1L", amount: 100000, price2step: 3000, price1step: 4250 },
    { value: "2l", label: "₹2L", amount: 200000, price2step: 5800, price1step: 8000 },
    { value: "5l", label: "₹5L", amount: 500000, price2step: 14000, price1step: 19500 },
    { value: "10l", label: "₹10L", amount: 1000000, price2step: 28000, price1step: 36000 },
    { value: "25l", label: "₹25L", amount: 2500000, price2step: 58000, price1step: 86000 },
    { value: "50l", label: "₹50L", amount: 5000000, price2step: 125000, price1step: 160000 },
  ]

  const platforms = [
    { value: "zerodha", label: "Zerodha", extraCost: 0 },
    { value: "angelone", label: "Angel One", extraCost: 0 },
    { value: "5paisa", label: "5 Paisa", extraCost: 0 },
  ]

  const selectedAccount = accountSizes.find((acc) => acc.value === selectedSize)
  const selectedPlatformData = platforms.find((p) => p.value === selectedPlatform)
  const basePrice = selectedAccount ? (selectedStep === "2step" ? selectedAccount.price2step : selectedAccount.price1step) : 0
  const totalPrice = basePrice + (selectedPlatformData?.extraCost || 0)

  const isBillingComplete = 
    billingInfo.firstName.trim() !== "" &&
    billingInfo.lastName.trim() !== "" &&
    billingInfo.country !== "" &&
    billingInfo.address.trim() !== "" &&
    billingInfo.city.trim() !== "" &&
    billingInfo.zipCode.trim() !== ""

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingInfo({
      ...billingInfo,
      [e.target.name]: e.target.value,
    })
  }

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handlePayment = async () => {
    setProcessing(true)
    try {
      // Create order on backend
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/payment/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: totalPrice,
          challengeType: selectedStep,
          accountSize: selectedAccount?.label,
          platform: selectedPlatformData?.label,
          billingInfo,
          userEmail: session?.user?.email,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create order')
      }

      // Open Razorpay payment modal
      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: 'BullTron',
        description: `${selectedStep} Challenge - ${selectedAccount?.label}`,
        order_id: data.orderId,
        prefill: {
          name: `${billingInfo.firstName} ${billingInfo.lastName}`,
          email: session?.user?.email,
        },
        theme: {
          color: '#2563eb',
        },
        handler: async function (response: any) {
          // Verify payment on backend
          const verifyResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/payment/verify-payment`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          })

          const verifyData = await verifyResponse.json()

          if (verifyData.success) {
            toast({
              title: "Payment Successful!",
              description: "Your challenge has been purchased successfully.",
            })
            router.push('/dashboard?payment=success')
          } else {
            toast({
              title: "Payment Verification Failed",
              description: "Please contact support.",
              variant: "destructive",
            })
          }
          setProcessing(false)
        },
        modal: {
          ondismiss: function () {
            setProcessing(false)
            toast({
              title: "Payment Cancelled",
              description: "You cancelled the payment.",
              variant: "destructive",
            })
          },
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error: any) {
      setProcessing(false)
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      })
    }
  }

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-6 py-16">
          <Skeleton className="h-12 w-64 mb-8" />
          <Skeleton className="h-96 w-full" />
        </main>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Create New Challenge</h1>
          <p className="text-muted-foreground mb-8">
            Configure your trading challenge and start your journey to becoming a funded trader.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Challenge Configuration */}
            <div className="lg:col-span-2 space-y-6">
              {/* Challenge Type */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-2">Challenge Type</h2>
                <p className="text-sm text-muted-foreground mb-4">Choose the type of challenge you want to take</p>
                <RadioGroup value={selectedStep} onValueChange={(val) => setSelectedStep(val as "1step" | "2step")}>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`flex items-center space-x-3 border-2 rounded-lg p-4 cursor-pointer transition-all ${selectedStep === "1step" ? "border-primary bg-primary/5 dark:bg-primary/10" : "border-border"}`}>
                      <RadioGroupItem value="1step" id="1step" />
                      <div>
                        <div className="font-medium">One Step</div>
                        <div className="text-sm text-muted-foreground">8% Profit Target</div>
                      </div>
                    </label>
                    <label className={`flex items-center space-x-3 border-2 rounded-lg p-4 cursor-pointer transition-all ${selectedStep === "2step" ? "border-primary bg-primary/5 dark:bg-primary/10" : "border-border"}`}>
                      <RadioGroupItem value="2step" id="2step" />
                      <div>
                        <div className="font-medium">Two Step</div>
                        <div className="text-sm text-muted-foreground">10% + 8% Targets</div>
                      </div>
                    </label>
                  </div>
                </RadioGroup>
              </Card>

              {/* Model */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-2">Model</h2>
                <p className="text-sm text-muted-foreground mb-4">Choose the trading model</p>
                <div className="border-2 border-primary bg-primary/5 dark:bg-primary/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-4 w-4 rounded-full bg-primary"></div>
                    <div className="font-medium">BearTron</div>
                  </div>
                </div>
              </Card>

              {/* Account Size */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-2">Account Size</h2>
                <p className="text-sm text-muted-foreground mb-4">Choose your preferred account size</p>
                <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                  <div className="grid grid-cols-3 gap-4">
                    {accountSizes.map((size) => (
                      <label
                        key={size.value}
                        className={`flex items-center justify-center border-2 rounded-lg p-4 cursor-pointer transition-all ${selectedSize === size.value ? "border-primary bg-primary/5 dark:bg-primary/10" : "border-border"}`}
                      >
                        <RadioGroupItem value={size.value} id={size.value} className="sr-only" />
                        <div className="text-center">
                          <div className="font-semibold text-lg">{size.label}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </RadioGroup>
              </Card>

              {/* Trading Platform */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-2">Trading Platform</h2>
                <p className="text-sm text-muted-foreground mb-4">Choose your preferred trading platform</p>
                <RadioGroup value={selectedPlatform} onValueChange={setSelectedPlatform}>
                  <div className="grid grid-cols-3 gap-4">
                    {platforms.map((platform) => (
                      <label
                        key={platform.value}
                        className={`flex items-center justify-center border-2 rounded-lg p-4 cursor-pointer transition-all ${selectedPlatform === platform.value ? "border-primary bg-primary/5 dark:bg-primary/10" : "border-border"}`}
                      >
                        <RadioGroupItem value={platform.value} id={platform.value} className="sr-only" />
                        <div className="text-center">
                          <div className="font-medium">{platform.label}</div>
                          {platform.extraCost > 0 && (
                            <div className="text-sm text-muted-foreground">+₹{(platform.extraCost / 1000).toFixed(1)}k</div>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </RadioGroup>
              </Card>
            </div>

            {/* Right Side - Billing Details */}
            <div className="space-y-6">
              {/* Billing Details Form */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-2">Billing Details</h2>
                <p className="text-sm text-muted-foreground mb-6">Enter your billing information for the challenge purchase</p>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={billingInfo.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={billingInfo.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Select value={billingInfo.country} onValueChange={(value) => setBillingInfo({ ...billingInfo, country: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="address">Billing Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={billingInfo.address}
                      onChange={handleInputChange}
                      placeholder="Street address"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={billingInfo.city}
                        onChange={handleInputChange}
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP / Postal Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={billingInfo.zipCode}
                        onChange={handleInputChange}
                        placeholder="Postal code"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="couponCode">Coupon Code</Label>
                    <p className="text-xs text-muted-foreground mb-2">Enter a coupon code to get a discount on your challenge</p>
                    <div className="flex gap-2">
                      <Input
                        id="couponCode"
                        name="couponCode"
                        value={billingInfo.couponCode}
                        onChange={handleInputChange}
                        placeholder="Enter coupon code"
                      />
                      <Button variant="outline">Apply</Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Order Summary */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6 pb-6 border-b">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {selectedAccount?.label} — {selectedStep === "1step" ? "One Step" : "Two Step"} BearTron
                    </span>
                    <span className="font-medium">
                      ₹{basePrice >= 100000 
                        ? `${(basePrice / 100000).toFixed(basePrice % 100000 === 0 ? 0 : 2)}L` 
                        : `${(basePrice / 1000).toFixed(1)}k`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Platform: {selectedPlatformData?.label}</span>
                    <span className="font-medium">{selectedPlatformData?.extraCost ? `₹${(selectedPlatformData.extraCost / 1000).toFixed(1)}k` : "Free"}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-3xl font-bold text-primary">
                    ₹{totalPrice >= 100000 
                      ? `${(totalPrice / 100000).toFixed(totalPrice % 100000 === 0 ? 0 : 2)}L` 
                      : `${(totalPrice / 1000).toFixed(1)}k`}
                  </span>
                </div>

                <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                    />
                    <div className="space-y-1 text-sm">
                      <label htmlFor="terms" className="font-medium cursor-pointer">
                        I agree with all the following terms:
                      </label>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-1">
                        <li>• I have read and agreed to the Terms of Use.</li>
                        <li>• All information provided is correct and matches government-issued ID.</li>
                        <li>• I have read and agree with the Terms & Conditions.</li>
                        <li>• I confirm that I am not a U.S. citizen or resident.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={!agreedToTerms || !isBillingComplete || processing}
                  onClick={handlePayment}
                >
                  {processing ? "Processing..." : "Proceed to Payment"}
                </Button>

                {!isBillingComplete && (
                  <p className="text-xs text-red-500 text-center mt-2">Please fill in all billing details</p>
                )}
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
