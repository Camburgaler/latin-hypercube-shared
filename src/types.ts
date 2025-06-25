export type LhcScale = { lower: number; upper: number };

export type LhcArgs = {
    number: number;
    dimensions: number;
    random: "true" | "false" | number[];
    base_scale: LhcScale;
    scales: Record<number, LhcScale>;
    column_headings: string[];
};
