---
subject: Chemistry I
topic: "Chapter 5: Quantum Numbers and Electron Configuration"
date: 13-08-2026
summary: The four quantum numbers that pinpoint an electron in an atom, orbital shapes, and the rules (Aufbau, Pauli, Hund) for writing electron configurations — including the Cr/Cu exceptions.
---
# Chapter 5: Quantum Numbers and Electron Configuration

**Outline:** 5.1 Atomic Orbitals · 5.2 The Four Quantum Numbers · 5.3 Orbital Shapes · 5.4 Electrons per Shell · 5.5 Electron Configuration Notation · 5.6 Aufbau, Pauli & Hund's Rules · 5.7 Relative Orbital Energies · 5.8 Exceptions (Cr, Cu) · 5.9 Electron Configuration of Ions

---

## 5.1 Atomic Orbitals

Bohr's theory couldn't explain how electrons are actually distributed in multi-electron atoms. In 1926, **Schrödinger** modified and extended Bohr's ideas into what's now called **Quantum (Wave) Mechanics**.

- An **orbital** is a mathematically-derived region of space around the nucleus where there is a high **probability** of finding an electron.
- There are four types of orbitals — **s, p, d, f** — each with a different shape, derived from Schrödinger's equation.

---

## 5.2 The Four Quantum Numbers

Four quantum numbers together describe the complete "address" and spin of an electron in an atom:

| Quantum number | Symbol | Describes |
| -------------- | ------ | --------- |
| **Principal** | *n* | Size and energy level of the orbital (the shell) |
| **Angular (azimuthal)** | ℓ | Shape of the electron cloud (the subshell) |
| **Magnetic** | *m*ℓ | Orientation of the orbital in space |
| **Spin** | *m*ₛ | Direction of the electron's magnetic field |

### 1. Principal quantum number (n)

- Describes the **size and energy** of the shell; *n* = 1, 2, 3, ... (positive integers).
- As *n* increases, energy increases.

### 2. Angular (azimuthal) quantum number (ℓ)

- Describes the **shape** of the electron cloud (the subshell).
- Each shell *n* contains exactly *n* subshells: ℓ = 0, 1, 2, ..., (*n* − 1).
- Subshells are labelled by letters:

| ℓ value | 0 | 1 | 2 | 3 |
| ------- | - | - | - | - |
| **Letter** | s | p | d | f |

| Shell (n) | Subshells present | Orbital types |
| --------- | ------------------ | -------------- |
| 1 | ℓ = 0 | s |
| 2 | ℓ = 0, 1 | s, p |
| 3 | ℓ = 0, 1, 2 | s, p, d |
| 4 | ℓ = 0, 1, 2, 3 | s, p, d, f |

### 3. Magnetic quantum number (mℓ)

- Describes the **orientation** of an orbital; *m*ℓ ranges from **−ℓ to +ℓ**.
- The total number of orbitals in a subshell = **2ℓ + 1**.

| ℓ | Possible mℓ values | Number of orbitals |
| - | ------------------- | ------------------- |
| 0 (s) | 0 | 1 |
| 1 (p) | −1, 0, +1 | 3 |
| 2 (d) | −2, −1, 0, +1, +2 | 5 |
| 3 (f) | −3, −2, −1, 0, +1, +2, +3 | 7 |

So there is **one** s orbital per shell (*n* ≥ 1), **three** p orbitals per shell (*n* ≥ 2, labelled pₓ, p_y, p_z), **five** d orbitals (*n* ≥ 3), and **seven** f orbitals (*n* ≥ 4).

> **Worked example:** name the orbitals for (a) *n*=4, ℓ=0 → **4s**; (b) *n*=2, ℓ=1 → **2p**; (c) *n*=3, ℓ=2 → **3d**; (d) *n*=5, ℓ=3 → **5f**.

### 4. Spin quantum number (ms)

- Describes the electron's **spin** (rotation about its own axis) and the direction of its magnetic field.
- Only **two** possible values: *m*ₛ = **+½** (spin up, ↿) or **−½** (spin down, ⇂).
- Every orbital holds **at most two electrons**, and they must have **opposite spins**.
- **Unpaired** electrons (parallel spins) make an atom **paramagnetic** (attracted to a magnet).
- **Paired** electrons (opposite spins, no net field) make an atom **diamagnetic** (repelled by a magnet).
- The Stern–Gerlach experiment confirmed this by showing a beam of atoms splits into exactly **two** deflected paths in a magnetic field.

> **Worked example:** quantum numbers for the two 1s electrons: (*n*=1, ℓ=0, *m*ℓ=0, *m*ₛ=+½) and (*n*=1, ℓ=0, *m*ℓ=0, *m*ₛ=−½).

---

## 5.3 Orbital Shapes

- **s orbitals** are **spherically symmetric** — the same shape at every *n* (1s, 2s, 3s...), just larger with increasing *n*.
- **p orbitals** first appear at *n* = 2. They are **dumbbell/peanut-shaped**, and the three (pₓ, p_y, p_z) point along the three axes of a Cartesian coordinate system.

![s and p orbital shapes](https://commons.wikimedia.org/wiki/Special:FilePath/S-p-Orbitals.svg?width=520)
*Image: "S-p-Orbitals," Wikimedia Commons (CC BY-SA 2.5/2.0/1.0).*

---

## 5.4 Electrons per Shell

For a given shell *n*:

$$\text{number of orbitals} = n^2 \qquad\qquad \text{maximum number of electrons} = 2n^2$$

| n | Orbitals (n²) | Max. electrons (2n²) |
| - | -------------- | ---------------------- |
| 1 | 1 | 2 |
| 2 | 4 | 8 |
| 3 | 9 | 18 |
| 4 | 16 | 32 |

> **Worked example:** what's the maximum number of electrons that can share *n*=2, ℓ=0, *m*ℓ=0? These three numbers describe **one** 2s orbital, which holds a maximum of **2 electrons** (with opposite spins).

---

## 5.5 Electron Configuration Notation

**Electron configuration** is shorthand for how an atom's electrons fill its shells and orbitals. There are two common ways to show it:

### 1. spdf (spectroscopic) notation

Format: **[shell number][subshell letter]^[number of electrons]** — e.g. oxygen (8 e⁻): **1s² 2s² 2p⁴**.

| Symbol | Electrons | Configuration |
| ------ | --------- | -------------- |
| H | 1 | 1s¹ |
| He | 2 | 1s² |
| C | 6 | 1s² 2s² 2p² |
| Ne | 10 | 1s² 2s² 2p⁶ |
| Ar | 18 | 1s² 2s² 2p⁶ 3s² 3p⁶ |

**Noble-gas-core notation** shortens this further by replacing the electrons matching a noble gas with its bracketed symbol:

| Symbol | Full configuration | Noble-gas-core notation |
| ------ | ------------------- | ------------------------- |
| Li | 1s² 2s¹ | [He] 2s¹ |
| P | 1s² 2s² 2p⁶ 3s² 3p³ | [Ne] 3s² 3p³ |
| Ti | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d² | [Ar] 4s² 3d² |

> **Worked example:** write C, Mg, S (Z = 6, 12, 16) in noble-gas-core notation → **C = [He] 2s² 2p²**, **Mg = [Ne] 3s²**, **S = [Ne] 3s² 3p⁴**.

### 2. Orbital box diagram

Each orbital is drawn as a **box**, and each electron as a **half-arrow** (↿ or ⇂) — this notation additionally shows electron **spin**, which spdf notation does not.

---

## 5.6 The Three Filling Rules

Electrons fill orbitals according to three rules, used together:

### Aufbau principle

> "Electrons fill the lowest-energy available subshell first."

Filling order (the diagonal/"arrow" rule): **1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f**. Note that **4s fills before 3d** — this becomes important for the transition metals (Section 5.8).

### Pauli exclusion principle

> "No two electrons in the same atom can have the same four quantum numbers."

If *n*, ℓ, and *m*ℓ are all the same (i.e. same orbital), *m*ₛ **must** differ — meaning any orbital holds at most **2 electrons**, with **opposite spins**.

### Hund's rule

> "For a set of orbitals of equal energy (e.g. all three p orbitals), electrons fill each empty orbital singly, with parallel spins, before any orbital gets a second electron."

This minimises electron–electron repulsion and gives the lowest-energy (most stable) arrangement.

---

## 5.7 Relative Energies of Atomic Orbitals

For an atom with more than one electron, orbitals within the same shell are **not** equal in energy — the energy rises with ℓ:

$$s < p < d < f$$

---

## 5.8 Exceptions to the Filling Order: Chromium and Copper

A handful of elements (notably **Cr, Cu, Mo, Ag, Pd, Au**) don't follow the "expected" Aufbau order, because of an extra **stability bonus**:

- A **completely filled** subshell is more stable than a partially filled one.
- A **half-filled** subshell is more stable than a subshell that is partially filled but not half-full.

| Element | Predicted configuration | Actual configuration |
| ------- | ------------------------ | ---------------------- |
| Cr | [Ar] 3d⁴ 4s² | **[Ar] 3d⁵ 4s¹** |
| Cu | [Ar] 3d⁹ 4s² | **[Ar] 3d¹⁰ 4s¹** |

- **Copper:** one electron jumps from 4s into 3d so the 3d subshell becomes **completely filled** (3d¹⁰), which is more stable than a partially-filled 3d⁹.
- **Chromium:** one electron jumps from 4s into 3d so the 3d subshell becomes **exactly half-filled** (3d⁵), which is more stable than a partially-filled 3d⁴.

---

## 5.9 Electron Configuration of Ions

- **Cations** (positive ions) form when an atom **loses** electrons — removed from the **outermost (highest-n) shell first**.
- **Anions** (negative ions) form when an atom **gains** electrons, completing its valence shell.

> **Worked examples:** Mg²⁺ → **1s² 2s² 2p⁶** (lost its two 3s electrons) · F⁻ → **1s² 2s² 2p⁶** (gained one electron to complete the 2p subshell, matching neon's configuration).

---

## Quick recap

- An **orbital** is a region of space with a high probability of containing an electron, described by **4 quantum numbers**: *n* (size/energy), ℓ (shape), *m*ℓ (orientation), *m*ₛ (spin).
- **s orbitals** are spherical; **p orbitals** are dumbbell-shaped, oriented along x/y/z.
- A shell *n* has **n² orbitals** and holds a maximum of **2n² electrons**.
- **spdf notation** (and its noble-gas-core shorthand) and the **orbital box diagram** are the two ways to write electron configurations.
- Three rules govern filling: **Aufbau** (lowest energy first, following the diagonal rule), **Pauli exclusion** (max 2 electrons per orbital, opposite spins), **Hund's rule** (singly fill degenerate orbitals with parallel spins before pairing).
- Within a shell, orbital energy follows **s < p < d < f**; note that **4s fills before 3d**.
- **Cr** and **Cu** break the expected filling order to achieve a more stable **half-filled** (Cr, 3d⁵) or **fully-filled** (Cu, 3d¹⁰) 3d subshell.
- **Cations** lose electrons from the outermost shell; **anions** gain electrons to complete their valence shell.

*Source: ASC0304 Chemistry I, Chapter 5 — Quantum Numbers and Electron Configuration (Centre for Foundation Studies in Science, Universiti Putra Malaysia).*
