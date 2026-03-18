'use client';

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import generateSummary from "@/server/gemini";
import { BookText, Loader2, Scissors } from "lucide-react";
import React, { useState } from "react";
import ReactMarkdowm from "react-markdown";

export default function HomePage() {

  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  function renderContent() {
    if (loading) return <Loader2 className="animate-spin" />
    else return <>
      <Scissors />
       Summarize Now
    </>
  }

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault()

    setLoading(true)
    const res = await generateSummary(text);
    setLoading(false);

    if (res) setResponse(res);
    else setResponse("Check API Keys")
  }

  return (
    <div className="space-y-8 p-4 flex flex-col items-center justify-center">
      <div className="flex mb-2 text-gray-500">
        <BookText />
        Enter you notes here
      </div>

      <div className="flex flex-col p-2 w-full max-w-[450px]">
        <form onSubmit={handleSubmit}>
          <Textarea value={text} onChange={(e) => setText(e.target.value)} required className="mb-2"/>
          <Button type="submit" className="w-full bg-indigo-500 text-white">
            {renderContent()}
          </Button>
        </form>
      </div>

      <div className="w-full max-w-[450px] p-2">
        <div className="w-full h-[400px] p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-y-auto relative">
          <span>
            <ReactMarkdowm>{response}</ReactMarkdowm>
          </span>
        </div>
      </div>
    </div>
  )
}