export abstract class Pizza {
    abstract description: string;
    abstract cost: number;

    abstract getCost(): number;

    abstract getDescription(): string;
};