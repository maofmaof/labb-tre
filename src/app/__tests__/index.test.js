
/** @jest-environment jsdom */
import { findAllByText, getAllByText, waitFor } from "@testing-library/react";
import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../page.js'
import Navbar from '../components/navbar.js'
import SpaceCard from "../components/spaceCard.js";

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
  it('finds navbar', () => {
    render(<Navbar />)
    waitFor(() => expect(getByText("Nonsense")).toBeInTheDocument())
  })
  it('test spacefeed', () => {
    const mockData = [{
      title: "test", summary: "test", url: "test",
      published_at: "test", updated_at: "test", image_url: "test"
    }]
    render(<SpaceCard info={mockData[0]} />)
    const p = screen.getAllByRole('paragraph')
    expect(p).toHaveLength(p.length)
  })
})