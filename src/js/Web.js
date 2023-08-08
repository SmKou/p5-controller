const scope = {
    width: 0,
    height: 0,
};

function fix(n) {
    return Number.parseFloat(n).toFixed(1);
}

export function setScope(width, height) {
    scope.width = width;
    scope.height = height;
}

export class Web {
    constructor(index) {
        this.id = index;
        this.lifespan = Math.random() * 60;
        this.speed = 4;
        this.color = [
            Math.random() * 255,
            Math.random() * 255,
            Math.random() * 255,
            0.2
        ];
        this.pos = [
            { x: scope.width / 2, y: scope.height / 2 - 10 },
            { x: scope.width / 2 - 10, y: scope.height / 2 },
            { x: scope.width / 2, y: scope.height / 2 + 10 },
            { x: scope.width / 2 + 10, y: scope.height / 2 }
        ];
        this.target = [
            { x: -1, y: -1 },
            { x: -1, y: -1 },
            { x: -1, y: -1 },
            { x: -1, y: -1 }
        ];

        this.setTarget();
    }

    toString() {
        let pos = `Web ${this.id} living ${this.lifespan}: `;
        for (const position of this.pos)
            pos += fix(position.x) + ", " + fix(position.y) + " ";
        pos += " to ";
        for (const tgt of this.target)
            pos += fix(tgt.x) + ", " + fix(tgt.y) + " ";
        return pos;
    }

    setTarget() {
        let hMed = (this.pos[0].x + this.pos[2].x) / 2;
        let vMed = (this.pos[1].y + this.pos[3].y) / 2;
        
        this.target[0].x = Math.random() * scope.width;
        this.target[0].y = Math.random() * vMed;

        this.target[1].x = Math.random() * hMed;
        this.target[1].y = Math.random() * scope.height;

        this.target[2].x = Math.random() * scope.width;
        this.target[2].y = Math.random() * (scope.height - vMed) + vMed;

        this.target[3].x = Math.random() * (scope.width - hMed) + hMed;
        this.target[3].y = Math.random() * scope.height;
    }

    getState() {
        const hasExpanded = [];
        let expanded = true;
        for (let i = 0; i < this.pos.length; i++) {
            let state = this.target[i].x == this.pos[i].x
                && this.target[i].y == this.pos[i].y;
            if (!state && expanded)
                expanded = false;
            hasExpanded.push(state);
        }
        return { expanded, states: hasExpanded };
    }

    move() {
        let params = this.getState();
        if (params.expanded) {
            this.setTarget();
            params.states = this.getState().states;
        }
        console.log(this.toString());
        
        for (let i = 0; i < this.pos.length; i++) {
            if (params.states[i])
                continue;
            const dirX = this.target[i].x == this.pos[i].x ? 0
                : (this.target[i].x - this.pos[i].x) / Math.abs(this.target[i].x - this.pos[i].x);
            const dirY = this.target[i].y == this.pos[i].y ? 0
                : (this.target[i].y - this.pos[i].y) / Math.abs(this.target[i].y - this.pos[i].y);
            
            this.pos[i].x += this.speed * dirX;
            this.pos[i].y += this.speed * dirY;
        }

        this.lifespan--;
    }

    render(p) {
        this.move();
        p.noStroke();
        p.fill(...this.color);
        p.quad(
            this.pos[0].x, this.pos[0].y,
            this.pos[1].x, this.pos[1].y,
            this.pos[2].x, this.pos[2].y,
            this.pos[3].x, this.pos[3].y
        );
    }
}