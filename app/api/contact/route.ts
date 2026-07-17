import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      subject,
      message,
    } = body;


    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address.",
        },
        {
          status: 400,
        }
      );
    }


    /*
      Contact form processing goes here.

      This endpoint currently validates
      and receives the message.

      Connect your preferred email service
      here when ready.
    */


    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
    });


    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
      },
      {
        status: 200,
      }
    );


  } catch (error) {

    console.error("Contact API error:", error);


    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}


export async function GET() {
  return NextResponse.json(
    {
      success: false,
      message: "Method not allowed.",
    },
    {
      status: 405,
    }
  );
}