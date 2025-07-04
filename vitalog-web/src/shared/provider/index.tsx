'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Toaster } from '@/shared/UI/toast/toaster';
import StoreInitializer from '@/shared/utils/StoreInitializer';
import { ThemeProvider } from '@/shared/provider/theme-provider';
import '@/i18n';

export default function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <QueryClientProvider client={queryClient}>
                <StoreInitializer />
                {children}
                <Toaster />
            </QueryClientProvider>
        </ThemeProvider>
    );
} 