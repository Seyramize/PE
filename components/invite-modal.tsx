"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { X } from "lucide-react"

export function InviteModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 max-w-xs rounded-lg overflow-hidden border-none gap-0">
        <div className="relative h-32">
          <Image
            src="/desert-sand-dunes-golden-hour-landscape.jpg"
            alt="Desert landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white p-6">
            <DialogHeader className="gap-1 mt-12">
              <DialogTitle className="font-serif text-2xl font-normal leading-tight">Got an invite code?</DialogTitle>
              <DialogDescription className="text-white/90 text-xs">
                Unlock invite only experiences with your curator's unique code.
              </DialogDescription>
            </DialogHeader>
          </div>
          <DialogClose className="absolute top-4 right-4 text-white opacity-80 hover:opacity-100 focus:outline-none">
            <div className="flex items-center gap-1.5">
              <span className="text-xs">Close</span>
              <div className="w-4 h-4 border border-white text-white rounded-full flex items-center justify-center">
                <X className="h-3 w-3" />
              </div>
            </div>
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>
        <div className="p-4 space-y-2 bg-white">
          <p className="text-center text-black leading-tight">
            Enter your code to unlock
            <br />
            your experience.
          </p>
          <div className="space-y-2">
            <Input placeholder="Invite Code" className="text-center h-10 rounded-xl text-xs border-gray-900 placeholder:text-zinc-400" />
            <Button size="default" className="w-full h-10 rounded-xl text-xs bg-gray-900 text-white">Unlock Access</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
