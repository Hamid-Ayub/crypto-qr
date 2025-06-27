# CashApp QR Generator

A modern web application for generating QR codes with a beautiful phone frame interface. Built with Next.js, React, and Tailwind CSS.

## Features

- Generate QR codes with custom styling
- Beautiful phone frame UI
- Screenshot functionality
- Responsive design
- Modern UI with Tailwind CSS

## Tech Stack

- **Framework**: Next.js
- **UI Library**: React
- **Styling**: Tailwind CSS
- **QR Generation**: qr-code-styling
- **Screenshots**: html-to-image, html2canvas

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cashapp-qr
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to GitHub
2. Import your project to Vercel
3. Vercel will automatically detect it's a Next.js app and deploy it

### Manual Deployment

1. Build the application:
```bash
npm run build
# or
yarn build
```

2. Start the production server:
```bash
npm start
# or
yarn start
```

## Project Structure

```
cashapp-qr/
├── components/          # React components
│   ├── ConfigurationPanel.js
│   ├── PhoneContent.js
│   ├── PhoneFrame.js
│   ├── QRGenerator.js
│   ├── ScreenshotButton.js
│   ├── ScreenshotModal.js
│   └── StatusBar.js
├── data/               # Data files
│   └── cryptocurrencies.js
├── hooks/              # Custom React hooks
│   └── useQRCode.js
├── pages/              # Next.js pages
│   ├── _app.js
│   └── index.js
├── public/             # Static assets
├── styles/             # CSS files
│   └── globals.css
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE). 