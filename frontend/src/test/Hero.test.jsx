import { describe, test, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Hero from '../landing_page/home/Hero';

//Test Suite

describe("Hero Component", () => {
    test("renders hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "/media/Images/homeHero.png");
    });
    test("renders signup link", () => {
        render(<Hero />);
        const signupLink = screen.getByRole("link",{name: /signup now/i});
        expect(signupLink).toBeInTheDocument();
        expect(signupLink).toHaveClass("btn-primary");
    });
});