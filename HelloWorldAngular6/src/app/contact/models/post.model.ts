export class PostModel {
    constructor(
        public title: string,
        public body: string,
        public userId?: number
    ){}
}