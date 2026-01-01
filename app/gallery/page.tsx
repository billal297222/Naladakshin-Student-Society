"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"

export default function GalleryPage() {
  const { t } = useLanguage()

  const photos = [
    {
      url: "/lush-green-village-landscape-bangladesh.jpg",
      title: "Landscape",
      query: "Village landscape Naladakshin",
    },
    {
      url: "/bangladeshi-students-studying-together-village.jpg",
      title: "Students",
      query: "Students studying in rural Bangladesh",
    },
    {
      url: "/rural-bangladesh-community-gathering.jpg",
      title: "Community",
      query: "Community gathering in Naladakshin",
    },
    {
      url: "/tree-plantation-drive-bangladesh.jpg",
      title: "Tree Plantation",
    },
    {
      url: "/road-repair-work-bangladesh-village.jpg",
      title: "Infrastructure",
    },
    {
      url: "/educational-supply-distribution-rural-school.jpg",
      title: "Education Wing",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t.gallery.title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.gallery.subtitle}</p>
        <p className="text-muted-foreground">{t.gallery.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <Card key={index} className="overflow-hidden group cursor-pointer border-none shadow-md">
            <CardContent className="p-0 relative aspect-[4/3]">
              <img
                src={photo.url || "/placeholder.svg"}
                alt={photo.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-lg border-b-2 border-white pb-1">{photo.title}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
