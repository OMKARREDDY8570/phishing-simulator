# 🛡️ Phishing Mirror Awareness Lab

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Available-success.svg?style=for-the-badge&logo=render)](https://phishing-simulator-hw4o.onrender.com/)
[![React](https://img.shields.io/badge/React-19.2-blue.svg?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-38B2AC.svg?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

**Live Project Output:** [https://phishing-simulator-hw4o.onrender.com/](https://phishing-simulator-hw4o.onrender.com/)

## 📖 Overview

The **Phishing Mirror Awareness Lab** is an interactive, educational cybersecurity tool designed to demonstrate the mechanics of modern phishing attacks. 

By providing a safe, client-side simulation, this project allows users to experience a phishing attack from both perspectives simultaneously:
- **The Victim View**: Deceptive, realistic login interfaces mimicking popular social media, email, and finance portals.
- **The Attacker Dashboard**: A real-time data feed capturing every focus, blur, click, and keystroke event happening on the victim's side.

After interacting with the mock portals, the application triggers a **Security Breakdown Overlay**, detailing exactly how the attack worked and providing actionable tips to identify real phishing attempts in the wild.

> **⚠️ IMPORTANT DISCLAIMER:** 
> This project is strictly built for educational and awareness purposes. It is a 100% client-side React application. **No user input, keystrokes, or credentials are ever transmitted over the internet, saved to a database, or collected in any form.** Please do not enter real passwords into this simulation.

## ✨ Features

- 🕵️ **Split-Screen Mechanics**: Side-by-side visualization of the victim's screen and the attacker's terminal.
- ⚡ **Real-Time Event Tracking**: Live monitoring of simulated keystrokes and DOM interactions.
- 🎨 **Multiple Scenarios**: Highly detailed mockups of:
  - Social Media Logins (`InstaConnect`)
  - Email Services (`G-Mail Secure`)
  - Financial Portals (`PaySafe Wallet`)
- 🛡️ **Interactive Feedback**: Post-action educational overlays highlighting the "red flags" missed during the simulation.
- 🚀 **Performant & Responsive**: Built with Vite, React 19, and Tailwind CSS. Ready for one-click deployment.

## 🛠️ Tech Stack

- **Framework**: React (TypeScript)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment Config**: Render Blueprint (`render.yaml`) included

## 🚀 Running Locally

To run this project on your local machine, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/phishing-simulator.git
   cd phishing-simulator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment

This project is configured out-of-the-box for [Render.com](https://render.com/) static site hosting. The included `render.yaml` file allows for one-click blueprint deployments. 

Because the app handles routing entirely on the client side, the Render configuration automatically handles redirecting all traffic back to `index.html`.

## 🤝 Contributing

Contributions are welcome! If you have ideas for new simulation templates or enhanced educational breakdowns, feel free to open an issue or submit a pull request.

---
*Stay vigilant. Stay secure.*
