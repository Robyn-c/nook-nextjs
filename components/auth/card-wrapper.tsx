"use client"

import React from 'react'
import { 
  Card, 
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

import Header from '@/components/auth/header';
import Social from '@/components/auth/social';
import BackButton from '@/components/auth/backbutton';

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export default function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial
} : CardWrapperProps) {
  return (
    <Card className="w-[400px] border-0 rounded bg-primary-400/20">
      <CardHeader>
        <Header label={headerLabel}  />
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
        {showSocial && (
          <CardFooter>
            <Social />
          </CardFooter>
        )}
        <CardFooter>
          <BackButton 
            label={backButtonLabel}
            href={backButtonHref}
          />
        </CardFooter>
    </Card>
  )
}
