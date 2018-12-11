// model for question object, which references answer array
export interface Question {
    id?: number;
    text: string;
    answerId: string;
    category: string;
    answers: Array<Answer>;
}

export interface Answer {
    id: string;
    label: string;
    inactive?: boolean;
    active?: boolean;
}

// export interface RunningScore {

// // }

// model for running score
