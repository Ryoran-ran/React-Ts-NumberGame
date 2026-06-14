export function NumberCheck(num: number, answer: number): number {
    if(num > answer){
        return -1;
    }
    else if(num < answer){
        return 1;
    }
    return 0;
}

export function resultSComment(answerResult: number): string{
    if(answerResult > 0){
        return "もっと大きいです";
    }
    else if(answerResult < 0){
        return "もっと小さいです";
    }
    return "正解！";
}