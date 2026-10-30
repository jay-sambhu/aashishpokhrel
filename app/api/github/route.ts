import { NextResponse } from "next/server";
import { REAL_GITHUB_PROJECTS } from "@/data/projects";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/users/jay-sambhu/repos?per_page=100&sort=updated", {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "NextJS-Portfolio-Dashboard",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({
        source: "fallback",
        repos: REAL_GITHUB_PROJECTS,
        totalPublicRepos: 60,
      });
    }

    const repos = await res.json();
    return NextResponse.json({
      source: "live",
      repos,
      totalPublicRepos: Array.isArray(repos) ? repos.length : 60,
    });
  } catch (error) {
    return NextResponse.json({
      source: "fallback",
      repos: REAL_GITHUB_PROJECTS,
      totalPublicRepos: 60,
    });
  }
}
