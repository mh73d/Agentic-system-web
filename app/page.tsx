'use client'

import { useState } from 'react'

export default function AIMeetingPlatform() {
  const [uploadedFile, setUploadedFile] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const handleUpload = (event) => {
    const file = event.target.files[0]

    if (!file) return

    setUploadedFile(file)
    setIsProcessing(true)
    setShowResult(false)

    setTimeout(() => {
      setIsProcessing(false)
      setShowResult(true)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF7D6] to-[#F5D76E] text-gray-900">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <div>
          <h1 className="text-3xl font-black text-[#A66A00] tracking-wide">
            MeetMind AI
          </h1>
        </div>

        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-2xl bg-[#D99800] text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            Login
          </button>

          <button className="px-5 py-2 rounded-2xl border-2 border-[#D99800] text-[#A66A00] font-semibold hover:bg-[#FFE58A] transition-all duration-300">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <div className="inline-block bg-[#FFE58A] text-[#8A5A00] px-4 py-2 rounded-full font-semibold mb-6 shadow">
              AI Powered Meeting Assistant
            </div>

            <h2 className="text-6xl font-black leading-tight text-[#7A4A00] mb-8">
              Upload Meetings.
              <br />
              Get Smart Summaries.
            </h2>

            <p className="text-xl text-[#6B5A2A] leading-relaxed mb-10 max-w-2xl">
              MeetMind AI transforms your audio and video meetings into
              accurate transcripts using Whisper AI, then analyzes the
              conversation with advanced AI models to generate summaries,
              action items, key decisions, positive & negative points, and
              speaker insights.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="px-8 py-4 rounded-2xl bg-[#C98700] text-white text-lg font-bold shadow-2xl hover:scale-105 transition-all duration-300">
                Upload Meeting
              </button>

              {/* ONLY CHANGE HERE */}
              <button
                onClick={() => {
                  document
                    .getElementById('demo-section')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 rounded-2xl border-2 border-[#C98700] text-[#7A4A00] text-lg font-bold hover:bg-[#FFF0A8] transition-all duration-300"
              >
                Watch Demo
              </button>
            </div>
          </div>

          {/* Upload Card */}
          <div className="relative">
            <div className="bg-white/70 backdrop-blur-lg p-10 rounded-[32px] shadow-2xl border border-white/50">

              <div className="border-4 border-dashed border-[#E2B200] rounded-3xl p-14 text-center bg-[#FFF8DC] hover:bg-[#FFF2B2] transition-all duration-300 cursor-pointer">

                <div className="w-24 h-24 mx-auto rounded-full bg-[#FFD84D] flex items-center justify-center mb-6 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 text-[#8A5A00]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V3m0 13.5l4.5-4.5M12 16.5l-4.5-4.5M3 20.25h18"
                    />
                  </svg>
                </div>

                <h3 className="text-3xl font-bold text-[#8A5A00] mb-4">
                  Drag & Drop Files
                </h3>

                <p className="text-[#6B5A2A] text-lg mb-6">
                  Upload MP4, MOV, MP3, WAV or meeting recordings
                </p>

                <label className="px-8 py-3 bg-[#D99800] text-white rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-xl inline-block cursor-pointer">
                  Choose File

                  <input
                    type="file"
                    accept="video/*,audio/*"
                    className="hidden"
                    onChange={handleUpload}
                  />
                </label>

                {uploadedFile && (
                  <div className="mt-6 text-[#7A4A00] font-semibold">
                    Uploaded: {uploadedFile.name}
                  </div>
                )}

                {isProcessing && (
                  <div className="mt-8 bg-white rounded-2xl p-5 shadow-lg">
                    <p className="text-[#8A5A00] font-bold text-lg">
                      Processing your meeting with Whisper AI...
                    </p>
                  </div>
                )}

                {showResult && (
                  <div className="mt-8 bg-white rounded-3xl p-8 shadow-2xl text-left border border-[#F1D36B]">

                    <h3 className="text-3xl font-black text-[#8A5A00] mb-6">
                      AI Meeting Summary
                    </h3>

                    <div className="space-y-6">

                      <div>
                        <h4 className="font-bold text-[#7A4A00] text-xl mb-2">
                          Transcript Preview
                        </h4>

                        <p className="text-[#6B5A2A] leading-relaxed">
                          Today the team discussed the development progress
                          of the AI meeting assistant platform.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#7A4A00] text-xl mb-2">
                          Summary
                        </h4>

                        <p className="text-[#6B5A2A] leading-relaxed">
                          The meeting focused on improving transcription quality.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#7A4A00] text-xl mb-2">
                          Action Items
                        </h4>

                        <ul className="text-[#6B5A2A] space-y-2">
                          <li>• Connect Whisper API</li>
                          <li>• Improve speaker detection</li>
                          <li>• Deploy project online</li>
                        </ul>
                      </div>

                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===================== ONLY ADDED SECTION ===================== */}
      <section
        id="demo-section"
        className="px-10 py-20"
      >

        <div className="bg-white/70 backdrop-blur-lg rounded-[36px] p-12 shadow-2xl">

          <h2 className="text-4xl font-black text-[#7A4A00] mb-8">
            Example AI Output (Demo)
          </h2>

          <div className="space-y-6">

            <div className="bg-[#FFF8DC] p-6 rounded-2xl border border-[#F1D36B]">
              <h3 className="font-bold text-[#8A5A00] text-xl mb-3">
                Meeting Summary
              </h3>
              <p className="text-[#6B5A2A]">
                This is a preview of how the AI-generated summary will look before uploading a file.
              </p>
            </div>

            <div className="bg-[#FFF8DC] p-6 rounded-2xl border border-[#F1D36B]">
              <h3 className="font-bold text-[#8A5A00] text-xl mb-3">
                Action Items
              </h3>

              <ul className="text-[#6B5A2A] space-y-2">
                <li>• Auto transcription via Whisper</li>
                <li>• AI summarization using LLM</li>
                <li>• Export report to email</li>
              </ul>
            </div>

          </div>

        </div>

      </section>

      {/* Features (UNCHANGED - KEPT EXACTLY AS YOUR CODE) */}
      <section className="px-10 py-20">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[#7A4A00] mb-6">
            Powerful Features
          </h2>

          <p className="text-xl text-[#6B5A2A] max-w-3xl mx-auto">
            Designed for students, teams, companies, and professionals who
            want intelligent meeting automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              title: 'Whisper AI',
              desc: 'Speech-to-text transcription with high accuracy.'
            },
            {
              title: 'Speaker Detection',
              desc: 'Identify and organize speakers automatically.'
            },
            {
              title: 'AI Summaries',
              desc: 'Generate concise and structured meeting summaries.'
            },
            {
              title: 'Email Reports',
              desc: 'Send polished HTML reports directly to users.'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-lg rounded-[28px] p-8 shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FFD84D] mb-6"></div>

              <h3 className="text-2xl font-bold text-[#7A4A00] mb-4">
                {feature.title}
              </h3>

              <p className="text-[#6B5A2A] leading-relaxed">
                {feature.desc}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-10 border-t border-[#E5C24D] text-center">

        <h3 className="text-2xl font-black text-[#8A5A00] mb-3">
          MeetMind AI
        </h3>

        <p className="text-[#6B5A2A]">
          AI-powered meeting summarization platform using Whisper and
          advanced language models.
        </p>

      </footer>

    </div>
  )
}
