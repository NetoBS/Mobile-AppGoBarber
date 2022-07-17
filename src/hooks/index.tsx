import React from "react";

import { AuthProvider } from './auth';

interface AppContextData {
    children?: any;
}

const AppProvider: React.FC<AppContextData> = ({ children }) => (
    <AuthProvider> {children}</AuthProvider>
);

export default AppProvider