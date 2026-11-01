"use client"

import { useState } from "react"
import Image from "next/image"
import type { ProjectItem } from "@/data/types"
import { ArrowLeft, ArrowRight } from "@/components/marks"

export function PlateGallery({ project }: { project: ProjectItem }) {
  const [index, setIndex] = useState(0)
  const images = project.images.length ? project.images : [project.image]
  const multiple = images.length > 1

  const go = (delta: number) =>
    setIndex((current) => (current + delta + images.length) % images.length)

  return (
    <figure>
      <div className="plate relative aspect-[16/10]">
        <Image
          key={images[index]}
          src={images[index]}
          alt={`${project.name} interface, view ${index + 1}`}
          fill
          priority={index === 0}
          sizes="(max-width: 1024px) 100vw, 1100px"
          className="object-cover object-top"
        />
      </div>

      {multiple && (
        <div className="mt-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`View ${i + 1}`}
                aria-current={i === index}
                className={`h-1 w-8 transition-colors duration-200 ${
                  i === index ? "bg-accent" : "bg-rule hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="label !text-[0.7rem]">
              {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous view"
              className="inline-flex h-8 w-8 items-center justify-center border border-rule text-ink transition-colors hover:border-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next view"
              className="inline-flex h-8 w-8 items-center justify-center border border-rule text-ink transition-colors hover:border-ink"
            >
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </figure>
  )
}
