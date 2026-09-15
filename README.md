# DhanDrishti (धनदृष्टि / धनदृष्टी)

> **"See the Future of Your Financial Decisions"**

**DhanDrishti** is an AI-powered, multilingual personal finance education, planning, and decision-simulation web platform crafted specifically for Indian young earners, students, and first-time investors.

Unlike traditional banking apps that provide static loan calculators (*"Your EMI is ₹6,150/mo"*), DhanDrishti is built around **Dynamic Consequence Intelligence**: showing you what a decision actually does to your monthly cash buffer, active goals, debt burden, and overall financial health before you commit.

---

## 🌟 Key Features

1. **What-If Decision Simulator (Core Differentiator)**
   - Test purchases (e.g. iPhone 17), loan EMIs, gadget EMIs, or SIP increases.
   - Live Before vs After consequence comparison:
     - Monthly Available Surplus: `₹20,000 → ₹13,800` (-₹6,200/mo)
     - Goal Delay: `6 months → 9 months` (+3 months delay)
     - Financial Health Score: `72 → 64` (-8 pts)
     - Debt-to-Income (DTI): `14% → 28%`
   - Real total financing cost breakdown (Principal + Interest overhead).
   - 12-Month Recharts projected savings trajectory (*Current Path vs Decision Path*).
   - DhanDrishti AI Insight tailored with exact mathematical calculations and smart alternative strategies.

2. **Interactive Financial Termopedia**
   - 14+ Indian financial concepts decoded into simple English, Hindi (हिन्दी), and Marathi (मराठी).
   - Terms covered: **GST, SIP, EMI, Mutual Fund, Inflation, FD, Credit Score (CIBIL), Insurance, Stocks, Loans, Income Tax, Credit Card, Interest, Compound Interest**.
   - Interactive 3D flip **Flashcards** mode with practical rules of thumb.
   - 5-question **Financial IQ Quiz** with instant feedback and celebration effects.
   - Inline interactive calculators for GST, SIP compounding, EMI, Compound Interest, and Inflation.
   - Deep-links to educational video explainers on YouTube.

3. **Context-Aware AI Financial Mentor**
   - Grounded in your live financial numbers (₹50k Income, ₹30k Expenses, ₹7k EMI, 72/100 Health score, Active Goals).
   - Instant answers to questions like *"Can I afford my iPhone in 6 months?"*, *"What happens if I increase my SIP?"*, *"How to improve my health score?"*.
   - Suggested contextual prompt pills and response copying.

4. **Transparent Financial Health Diagnostic (0-100)**
   - Formula-driven 5-pillar scoring:
     - Savings Rate (Max 25 pts)
     - Debt Burden / DTI (Max 25 pts)
     - Emergency Runway (Max 20 pts)
     - Investment Habit (Max 15 pts)
     - Goal Feasibility (Max 15 pts)
   - Dynamic strengths, weaknesses, and prioritized score improvement recommendations.

5. **Goal Planner**
   - Milestone tracking for gadgets, safety funds, laptops, and vacations.
   - Automated timeline calculations, remaining amounts, and monthly required savings checks against monthly surplus.

6. **Document Explainer (Fine-Print Decoder)**
   - Drag-and-drop or select sample loan agreements and credit card statements.
   - 5-step animated scanning sequence.
   - Clear breakdown of Key Amounts, Interest & Hidden Charges, Deadlines, Critical Terms, What This Means For You, and Watchout Cautions.

7. **Investments Portfolio**
   - Portfolio tracking across Mutual Funds, SIP, Fixed Deposits, Gold, and Stocks.
   - Interactive Recharts Donut allocation and expected compound return rates.

8. **Multilingual & Theming**
   - Native toggle between **English**, **हिन्दी (Hindi)**, and **मराठी (Marathi)** across the entire platform.
   - High-contrast **Dark Mode** and crisp fintech **Light Mode** persisted in `localStorage`.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 8
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS (with custom brand palette, typography, glassmorphism, 3D flip utilities)
- **Charts & Visualizations**: Recharts (Responsive Area and Donut Charts)
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti
- **State & Storage**: React Context API + LocalStorage Mock Persistence

---

## 🚀 How to Install & Run

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- `npm`

### Step-by-Step Instructions

1. **Extract ZIP or clone repository**:
   ```bash
   cd dhandrishti
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in your browser**:
   Navigate to [http://localhost:5173](http://localhost:5173) (or the URL shown in your terminal).

---

## 🔑 Demo Credentials

To experience the preloaded demo profile:

- **Email**: `aarohi.demo@dhandrishti.app`
- **Password**: `DhanDrishti@123`

*(You can also use the convenient **"Auto-Fill Demo Credentials"** button on the Login page, or create a brand new account and run through the 8-step visual Onboarding flow!)*

---

## 📊 Preloaded Demo Financial Data

- **User**: Aarohi Sharma
- **Monthly Income**: ₹50,000
- **Monthly Expenses**: ₹30,000
- **Monthly Surplus**: ₹13,000 (after ₹7,000 EMI)
- **Active EMI**: ₹7,000/month (14% DTI ratio)
- **Total Investments**: ₹1,20,000 (Mutual Funds, Index SIP, FD, SGB Gold, Stocks)
- **Emergency Runway**: ₹45,000 (~1.2 months)
- **Financial Health Score**: 72 / 100 (Good)
- **Primary Goal**: Buy iPhone 17 (Target ₹70,000, Saved ₹30,000, Timeline 6 months)

---

## 🔮 Future Backend Integration Architecture

The codebase has been designed with modular service layers and explicit `// TODO:` hooks for seamless backend integration:

1. **Authentication (`src/services/mockAuthService.ts`)**:
   - `// TODO: Replace mock auth with Supabase Auth`
2. **User Profile (`src/services/mockUserService.ts`)**:
   - `// TODO: Fetch user financial profile from Supabase/PostgreSQL`
3. **Goal Planning (`src/services/mockGoalService.ts`)**:
   - `// TODO: Persist goals to Supabase`
4. **Investment Tracking (`src/services/mockInvestmentService.ts`)**:
   - `// TODO: Sync investments with Supabase/PostgreSQL`
5. **AI Financial Mentor (`src/services/mockMentorService.ts`)**:
   - `// TODO: Replace mock AI response with Gemini API`
6. **Document Analysis OCR (`src/services/mockDocumentService.ts`)**:
   - `// TODO: Replace document mock processing with backend processing & Gemini Multimodal OCR`

---

## 📁 Project Directory Structure

```
dhandrishti/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── README.md
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types/
    │   └── index.ts
    ├── context/
    │   ├── AuthContext.tsx
    │   ├── ThemeContext.tsx
    │   ├── LanguageContext.tsx
    │   ├── FinanceContext.tsx
    │   └── ToastContext.tsx
    ├── i18n/
    │   ├── index.ts
    │   ├── en.ts
    │   ├── hi.ts
    │   └── mr.ts
    ├── data/
    │   └── mockData.ts
    ├── services/
    │   ├── mockAuthService.ts
    │   ├── mockUserService.ts
    │   ├── mockGoalService.ts
    │   ├── mockInvestmentService.ts
    │   ├── mockDecisionService.ts
    │   ├── mockDocumentService.ts
    │   ├── mockMentorService.ts
    │   ├── mockTermopediaService.ts
    │   └── mockHealthService.ts
    ├── utils/
    │   ├── calculations.ts
    │   ├── formatters.ts
    │   └── storage.ts
    ├── components/
    │   ├── common/
    │   │   ├── Navbar.tsx
    │   │   ├── Sidebar.tsx
    │   │   ├── Topbar.tsx
    │   │   ├── ThemeToggle.tsx
    │   │   ├── LanguageSelector.tsx
    │   │   ├── StatCard.tsx
    │   │   ├── ProgressRing.tsx
    │   │   ├── ProgressBar.tsx
    │   │   ├── Modal.tsx
    │   │   ├── ThreeDotMenu.tsx
    │   │   ├── EmptyState.tsx
    │   │   ├── LoadingSkeleton.tsx
    │   │   └── ProtectedRoute.tsx
    │   ├── dashboard/
    │   │   ├── FinancialSnapshot.tsx
    │   │   ├── HealthSummaryCard.tsx
    │   │   ├── QuickGoalCard.tsx
    │   │   └── WhatIfCard.tsx
    │   ├── simulator/
    │   │   ├── DecisionPresets.tsx
    │   │   ├── CustomDecisionForm.tsx
    │   │   ├── BeforeAfterComparison.tsx
    │   │   ├── FutureImpactChart.tsx
    │   │   └── AIDecisionInsight.tsx
    │   ├── termopedia/
    │   │   ├── TermCard.tsx
    │   │   ├── FlashcardModal.tsx
    │   │   ├── QuizModal.tsx
    │   │   └── TermCalculatorModal.tsx
    │   ├── goals/
    │   │   ├── GoalCard.tsx
    │   │   └── AddEditGoalModal.tsx
    │   ├── investments/
    │   │   ├── PortfolioDonutChart.tsx
    │   │   └── AddEditInvestmentModal.tsx
    │   ├── documents/
    │   │   ├── UploadZone.tsx
    │   │   ├── DocumentProcessingAnimation.tsx
    │   │   └── DocumentAnalysisView.tsx
    │   ├── mentor/
    │   │   ├── ChatMessage.tsx
    │   │   ├── ChatInput.tsx
    │   │   └── UserContextPill.tsx
    │   └── health/
    │       ├── HealthScoreGauge.tsx
    │       ├── MetricBreakdownList.tsx
    │       └── ActionRecommendationList.tsx
    ├── layouts/
    │   ├── AppLayout.tsx
    │   └── PublicLayout.tsx
    └── pages/
        ├── LandingPage.tsx
        ├── LoginPage.tsx
        ├── SignupPage.tsx
        ├── OnboardingPage.tsx
        ├── DashboardPage.tsx
        ├── DecisionSimulatorPage.tsx
        ├── TermopediaPage.tsx
        ├── TermDetailPage.tsx
        ├── GoalPlannerPage.tsx
        ├── DocumentExplainerPage.tsx
        ├── MentorPage.tsx
        ├── FinancialHealthPage.tsx
        ├── InvestmentsPage.tsx
        ├── ProfilePage.tsx
        ├── SettingsPage.tsx
        └── NotFoundPage.tsx
```

---

*Built with ❤️ for the 2026 Hackathon • DhanDrishti: See the Future of Your Financial Decisions.*
