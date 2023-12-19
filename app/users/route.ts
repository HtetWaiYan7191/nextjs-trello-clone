import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        name: 'htet',
        title: 'web developer',
        age: 21,
    })
}