import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ChallengeDetail } from "@/components/ChallengeDetail";
import { challengeById, challenges } from "@/content/challenges";

type Params = { params: Promise<{ id: string }> };

/** Every challenge is a build-time page; nothing is generated on demand. */
export const dynamicParams = false;

export function generateStaticParams() {
  return challenges.map((challenge) => ({ id: challenge.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const challenge = challengeById(id);
  if (!challenge) return {};

  const title = challenge.title.en;
  const description = challenge.scenario.en;
  const url = `/c/${challenge.id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: "AutoDay",
      title: `${title} — AutoDay`,
      description,
      url,
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — AutoDay`,
      description,
    },
  };
}

export default async function ChallengePage({ params }: Params) {
  const { id } = await params;
  const challenge = challengeById(id);
  if (!challenge) notFound();

  return (
    <main className="flex flex-1 flex-col">
      <ChallengeDetail challenge={challenge} />
    </main>
  );
}
