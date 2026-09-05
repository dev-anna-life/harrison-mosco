import { NextRequest, NextResponse } from "next/server";
import { POST as leadsPost } from "../leads/route";

export async function POST(req: NextRequest) {
  return leadsPost(req);
}
