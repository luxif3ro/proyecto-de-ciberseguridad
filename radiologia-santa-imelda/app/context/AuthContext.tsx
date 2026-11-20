"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

interface User {
    id: number;
    nombre: string;
    usuario: string;
    rol: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (user: User) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

export function AuthProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");

        if (storedUser) {
            try {
                const user = JSON.parse(storedUser);
                setUser(user);
            } catch {
                sessionStorage.removeItem("user");
            }
        }

        setLoading(false);
    }, []);

    const login = (user: User) => {
        setUser(user);
        sessionStorage.setItem(
            "user",
            JSON.stringify(user)
        );
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
                isAuthenticated: user !== null,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth debe utilizarse dentro de AuthProvider"
        );
    }

    return context;
}