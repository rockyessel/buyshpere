import bcrypt from 'bcrypt';

import { client } from '@/app/libs/prisma-db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  console.log(request);
  const body = await request.json();
  const { email, name, password } = body;

  console.log('body', body);

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await client.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
