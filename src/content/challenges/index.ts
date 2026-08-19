import type { Category, Challenge, Level, Mode } from "../types";

import { adCopyVariants } from "./ad-copy-variants";
import { approvalGate } from "./approval-gate";
import { boardDeckNumbers } from "./board-deck-numbers";
import { brandVoiceJudge } from "./brand-voice-judge";
import { campaignLocalisation } from "./campaign-localisation";
import { commitMessage } from "./commit-message";
import { complaintQuality } from "./complaint-quality";
import { crmDedupe } from "./crm-dedupe";
import { crmWriteback } from "./crm-writeback";
import { csvCleaning } from "./csv-cleaning";
import { docsDrift } from "./docs-drift";
import { errorGrouping } from "./error-grouping";
import { escalationRouter } from "./escalation-router";
import { execRollup } from "./exec-rollup";
import { expensePolicyCheck } from "./expense-policy-check";
import { flakeBacklog } from "./flake-backlog";
import { handbookAnswers } from "./handbook-answers";
import { inboxRouting } from "./inbox-routing";
import { languageDrills } from "./language-drills";
import { listingWriter } from "./listing-writer";
import { litReviewAgent } from "./lit-review-agent";
import { medicalTimeline } from "./medical-timeline";
import { meetingFollowups } from "./meeting-followups";
import { metricCommentary } from "./metric-commentary";
import { migrationRisk } from "./migration-risk";
import { mondayFilter } from "./monday-filter";
import { multilingualReplies } from "./multilingual-replies";
import { newsletterCuration } from "./newsletter-curation";
import { paperTriage } from "./paper-triage";
import { pdfTableExtract } from "./pdf-table-extract";
import { podcastRepurpose } from "./podcast-repurpose";
import { prFirstPass } from "./pr-first-pass";
import { priceWatch } from "./price-watch";
import { productPhotoAlt } from "./product-photo-alt";
import { receiptShoebox } from "./receipt-shoebox";
import { recipesToList } from "./recipes-to-list";
import { regulatoryDiff } from "./regulatory-diff";
import { releaseNotes } from "./release-notes";
import { renewalWatch } from "./renewal-watch";
import { reproFromBug } from "./repro-from-bug";
import { rotaSwapAgent } from "./rota-swap-agent";
import { schoolEmails } from "./school-emails";
import { seoBriefBuilder } from "./seo-brief-builder";
import { subscriptionAudit } from "./subscription-audit";
import { supportReplyDraft } from "./support-reply-draft";
import { surveyFreetext } from "./survey-freetext";
import { testimonialMining } from "./testimonial-mining";
import { toneCheck } from "./tone-check";
import { tripPlanner } from "./trip-planner";
import { voicemailToTask } from "./voicemail-to-task";

/**
 * The library. Grouped by category to make coverage gaps visible.
 */
export const challenges: Challenge[] = [
  // work-admin
  mondayFilter,
  inboxRouting,
  expensePolicyCheck,
  renewalWatch,
  execRollup,
  approvalGate,
  rotaSwapAgent,
  boardDeckNumbers,
  handbookAnswers,
  // marketing-content
  podcastRepurpose,
  adCopyVariants,
  brandVoiceJudge,
  seoBriefBuilder,
  testimonialMining,
  newsletterCuration,
  campaignLocalisation,
  productPhotoAlt,
  // data-research
  priceWatch,
  surveyFreetext,
  pdfTableExtract,
  paperTriage,
  crmDedupe,
  litReviewAgent,
  regulatoryDiff,
  metricCommentary,
  csvCleaning,
  // software-dev
  releaseNotes,
  flakeBacklog,
  prFirstPass,
  errorGrouping,
  reproFromBug,
  docsDrift,
  commitMessage,
  migrationRisk,
  // communication
  meetingFollowups,
  supportReplyDraft,
  toneCheck,
  voicemailToTask,
  escalationRouter,
  crmWriteback,
  complaintQuality,
  multilingualReplies,
  // personal
  receiptShoebox,
  recipesToList,
  schoolEmails,
  medicalTimeline,
  tripPlanner,
  subscriptionAudit,
  languageDrills,
  listingWriter,
];

export function challengeById(id: string): Challenge | undefined {
  return challenges.find((challenge) => challenge.id === id);
}

export type ChallengeQuery = {
  mode: Mode;
  /** Omitted means "no narrowing on this axis", which is not the same as []. */
  categories?: readonly Category[];
  levels?: readonly Level[];
};

/**
 * The one place the library is narrowed. The filter UI counts what this
 * returns and the spin picks from it, so the number on screen can never
 * disagree with what a spin can actually produce.
 */
export function matchingChallenges(query: ChallengeQuery): Challenge[] {
  return challenges.filter(
    (challenge) =>
      challenge.mode === query.mode &&
      (!query.categories || query.categories.includes(challenge.category)) &&
      (!query.levels || query.levels.includes(challenge.level)),
  );
}

/**
 * Picks from a pool, avoiding an immediate repeat.
 * Must only be called from an event handler or effect — calling it during
 * render would desync the server and client markup.
 */
export function pickFrom(
  pool: readonly Challenge[],
  excludeId?: string,
): Challenge | null {
  if (pool.length === 0) return null;

  const candidates =
    pool.length > 1 && excludeId
      ? pool.filter((challenge) => challenge.id !== excludeId)
      : pool;

  return candidates[Math.floor(Math.random() * candidates.length)];
}
