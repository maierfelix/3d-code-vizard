let idx = 1;
var TokenKind;
(function(TokenKind) {
    TokenKind[TokenKind['TT_UNKNOWN'] = 0] = 'TT_UNKNOWN';
    TokenKind[TokenKind['KK_ENUM'] = 1] = 'KK_ENUM';
    TokenKind[TokenKind['KK_LET'] = 2] = 'KK_LET';
    TokenKind[TokenKind['KK_CONST'] = 3] = 'KK_CONST';
    TokenKind[TokenKind['KK_EXPORT'] = 4] = 'KK_EXPORT';
    TokenKind[TokenKind['KK_FUNCTION'] = 5] = 'KK_FUNCTION';
    TokenKind[TokenKind['KK_IF'] = 6] = 'KK_IF';
    TokenKind[TokenKind['KK_ELSE'] = 7] = 'KK_ELSE';
    TokenKind[TokenKind['KK_WHILE'] = 8] = 'KK_WHILE';
    TokenKind[TokenKind['KK_BREAK'] = 9] = 'KK_BREAK';
    TokenKind[TokenKind['KK_CONTINUE'] = 10] = 'KK_CONTINUE';
    TokenKind[TokenKind['KK_RETURN'] = 11] = 'KK_RETURN';
    TokenKind[TokenKind['PP_LPAREN'] = 12] = 'PP_LPAREN';
    TokenKind[TokenKind['PP_RPAREN'] = 13] = 'PP_RPAREN';
    TokenKind[TokenKind['PP_LBRACK'] = 14] = 'PP_LBRACK';
    TokenKind[TokenKind['PP_RBRACK'] = 15] = 'PP_RBRACK';
    TokenKind[TokenKind['PP_LBRACE'] = 16] = 'PP_LBRACE';
    TokenKind[TokenKind['PP_RBRACE'] = 17] = 'PP_RBRACE';
    TokenKind[TokenKind['PP_DOT'] = 18] = 'PP_DOT';
    TokenKind[TokenKind['PP_COLON'] = 19] = 'PP_COLON';
    TokenKind[TokenKind['PP_COMMA'] = 20] = 'PP_COMMA';
    TokenKind[TokenKind['PP_SEMIC'] = 21] = 'PP_SEMIC';
    TokenKind[TokenKind['OP_ASS'] = 22] = 'OP_ASS';
    TokenKind[TokenKind['OP_ADD'] = 23] = 'OP_ADD';
    TokenKind[TokenKind['OP_SUB'] = 24] = 'OP_SUB';
    TokenKind[TokenKind['OP_MUL'] = 25] = 'OP_MUL';
    TokenKind[TokenKind['OP_DIV'] = 26] = 'OP_DIV';
    TokenKind[TokenKind['OP_NEW'] = 27] = 'OP_NEW';
    TokenKind[TokenKind['OP_OR'] = 28] = 'OP_OR';
    TokenKind[TokenKind['OP_AND'] = 29] = 'OP_AND';
    TokenKind[TokenKind['OP_NOT'] = 30] = 'OP_NOT';
    TokenKind[TokenKind['OP_LT'] = 31] = 'OP_LT';
    TokenKind[TokenKind['OP_LTE'] = 32] = 'OP_LTE';
    TokenKind[TokenKind['OP_GT'] = 33] = 'OP_GT';
    TokenKind[TokenKind['OP_GTE'] = 34] = 'OP_GTE';
    TokenKind[TokenKind['OP_EQUAL'] = 35] = 'OP_EQUAL';
    TokenKind[TokenKind['OP_NEQUAL'] = 36] = 'OP_NEQUAL';
    TokenKind[TokenKind['OP_BIN_OR'] = 37] = 'OP_BIN_OR';
    TokenKind[TokenKind['OP_BIN_AND'] = 38] = 'OP_BIN_AND';
    TokenKind[TokenKind['OP_ADD_ADD'] = 39] = 'OP_ADD_ADD';
    TokenKind[TokenKind['OP_SUB_SUB'] = 40] = 'OP_SUB_SUB';
    TokenKind[TokenKind['TT_NULL'] = 41] = 'TT_NULL';
    TokenKind[TokenKind['TT_STRING'] = 42] = 'TT_STRING';
    TokenKind[TokenKind['TT_NUMBER'] = 43] = 'TT_NUMBER';
    TokenKind[TokenKind['TT_BOOLEAN'] = 44] = 'TT_BOOLEAN';
    TokenKind[TokenKind['TT_IDENTIFIER'] = 45] = 'TT_IDENTIFIER';
    TokenKind[TokenKind['NN_PROGRAM'] = 46] = 'NN_PROGRAM';
    TokenKind[TokenKind['NN_IF'] = 47] = 'NN_IF';
    TokenKind[TokenKind['NN_LET'] = 48] = 'NN_LET';
    TokenKind[TokenKind['NN_CONST'] = 49] = 'NN_CONST';
    TokenKind[TokenKind['NN_EXPORT'] = 50] = 'NN_EXPORT';
    TokenKind[TokenKind['NN_FUNCTION'] = 51] = 'NN_FUNCTION';
    TokenKind[TokenKind['NN_ENUM'] = 52] = 'NN_ENUM';
    TokenKind[TokenKind['NN_ENUM_ITEM'] = 53] = 'NN_ENUM_ITEM';
    TokenKind[TokenKind['NN_ENUM_EXPRESSION'] = 54] = 'NN_ENUM_EXPRESSION';
    TokenKind[TokenKind['NN_UNARY_PREFIX_EXPRESSION'] = 55] = 'NN_UNARY_PREFIX_EXPRESSION';
    TokenKind[TokenKind['NN_UNARY_POSTFIX_EXPRESSION'] = 56] = 'NN_UNARY_POSTFIX_EXPRESSION';
    TokenKind[TokenKind['NN_BINARY_EXPRESSION'] = 57] = 'NN_BINARY_EXPRESSION';
    TokenKind[TokenKind['NN_MEMBER_EXPRESSION'] = 58] = 'NN_MEMBER_EXPRESSION';
    TokenKind[TokenKind['NN_COMPUTED_MEMBER_EXPRESSION'] = 59] = 'NN_COMPUTED_MEMBER_EXPRESSION';
    TokenKind[TokenKind['NN_OBJECT_EXPRESSION'] = 60] = 'NN_OBJECT_EXPRESSION';
    TokenKind[TokenKind['NN_OBJECT_PROPERTY'] = 61] = 'NN_OBJECT_PROPERTY';
    TokenKind[TokenKind['NN_ARRAY_EXPRESSION'] = 62] = 'NN_ARRAY_EXPRESSION';
    TokenKind[TokenKind['NN_ARRAY_ELEMENT'] = 63] = 'NN_ARRAY_ELEMENT';
    TokenKind[TokenKind['NN_CALL_EXPRESSION'] = 64] = 'NN_CALL_EXPRESSION';
    TokenKind[TokenKind['NN_WHILE'] = 65] = 'NN_WHILE';
    TokenKind[TokenKind['NN_RETURN'] = 66] = 'NN_RETURN';
    TokenKind[TokenKind['NN_BREAK'] = 67] = 'NN_BREAK';
    TokenKind[TokenKind['NN_CONTINUE'] = 68] = 'NN_CONTINUE';
    TokenKind[TokenKind['NN_LITERAL'] = 69] = 'NN_LITERAL';
    TokenKind[TokenKind['NN_STRING_LITERAL'] = 70] = 'NN_STRING_LITERAL';
    TokenKind[TokenKind['NN_INOUT'] = 71] = 'NN_INOUT';
})(TokenKind || (TokenKind = {}));

function isBlank(cc) {
    return (cc === 9 || cc === 11 || cc === 12 || cc === 32 || cc === 160);
};

function isQuote(cc) {
    return (cc === 39 || cc === 34);
};

function isAlpha(cc) {
    return (cc >= 65 && cc <= 90 || cc >= 97 && cc <= 122 || cc === 95);
};

function isNumber(cc) {
    return (cc >= 48 && cc <= 57);
};

function isBinaryOperator(token) {
    let kind = token.kind;
    return (kind === 22 || kind === 23 || kind === 24 || kind === 25 || kind === 26 || kind === 28 || kind === 29 || kind === 30 || kind === 31 || kind === 32 || kind === 33 || kind === 34 || kind === 35 || kind === 36 || kind === 37 || kind === 38 && !isUnaryPrefixOperator(token));
};

function isUnaryPrefixOperator(token) {
    let kind = token.kind;
    return (kind === 27 || kind === 30 || kind === 39 || kind === 40);
};

function isUnaryPostfixOperator(token) {
    let kind = token.kind;
    return (kind === 39 || kind === 40);
};

function isLiteral(token) {
    let kind = token.kind;
    return (kind === 41 || kind === 42 || kind === 43 || kind === 44 || kind === 45);
};

function isPunctuatorChar(ch) {
    return (ch === '(' || ch === ')' || ch === '[' || ch === ']' || ch === '{' || ch === '}' || ch === '.' || ch === ':' || ch === ',' || ch === ';' || ch === '*' || ch === '/');
};

function isOperatorChar(ch) {
    return (ch === '+' || ch === '-' || ch === '!' || ch === '=' || ch === '|' || ch === '&' || ch === '>' || ch === '<');
};

function isOperator(str) {
    if (str.length === 1) {
        return (isOperatorChar(str));
    };
    return (str === '++' || str === '--' || str === '==' || str === '!=' || str === '||' || str === '&&' || str === '>=' || str === '<=');
};

function processToken(tokens, value, line, column) {
    let kind = 0;
    if (value === 'enum') {
        kind = 1;
    } else if (value === 'let') {
        kind = 2;
    } else if (value === 'const') {
        kind = 3;
    } else if (value === 'export') {
        kind = 4;
    } else if (value === 'function') {
        kind = 5;
    } else if (value === 'if') {
        kind = 6;
    } else if (value === 'else') {
        kind = 7;
    } else if (value === 'while') {
        kind = 8;
    } else if (value === 'break') {
        kind = 9;
    } else if (value === 'continue') {
        kind = 10;
    } else if (value === 'return') {
        kind = 11;
    } else if (value === 'true' || value === 'false') {
        kind = 44;
    } else if (value === 'null') {
        kind = 41;
    } else if (value === '(') {
        kind = 12;
    } else if (value === ')') {
        kind = 13;
    } else if (value === '[') {
        kind = 14;
    } else if (value === ']') {
        kind = 15;
    } else if (value === '{') {
        kind = 16;
    } else if (value === '}') {
        kind = 17;
    } else if (value === '.') {
        kind = 18;
    } else if (value === ':') {
        kind = 19;
    } else if (value === ',') {
        kind = 20;
    } else if (value === ';') {
        kind = 21;
    } else if (value === '!') {
        kind = 30;
    } else if (value === '=') {
        kind = 22;
    } else if (value === '+') {
        kind = 23;
    } else if (value === '-') {
        kind = 24;
    } else if (value === '*') {
        kind = 25;
    } else if (value === '/') {
        kind = 26;
    } else if (value === '<') {
        kind = 31;
    } else if (value === '<=') {
        kind = 32;
    } else if (value === '>') {
        kind = 33;
    } else if (value === '>=') {
        kind = 34;
    } else if (value === '|') {
        kind = 37;
    } else if (value === '&') {
        kind = 38;
    } else if (value === '==') {
        kind = 35;
    } else if (value === '!=') {
        kind = 36;
    } else if (value === '||') {
        kind = 28;
    } else if (value === '&&') {
        kind = 29;
    } else if (value === '++') {
        kind = 39;
    } else if (value === '--') {
        kind = 40;
    } else if (value === 'new') {
        kind = 27;
    } else {
        kind = 45;
    };
    let token = createToken(kind, value, line, column - value.length);
    tokens.push(token);
    return (token);
};

function createToken(kind, value, line, column) {
    let token = {
        kind: kind,
        value: value,
        line: line,
        column: column
    };
    return (token);
};

function scan(str) {
    let ii = -1;
    let line = 1;
    let column = 0;
    let length = str.length;
    let tokens = [];

    function next() {
        ii++;
        column++;
    };

    function processOperator(ch, second, line, column) {
        if (second && isOperator(ch + second)) {
            next();
            processToken(tokens, ch + second, line, column);
        } else if (isOperator(ch)) {
            processToken(tokens, ch, line, column);
        };
    };
    while (true) {
        next();
        let ch = str.charAt(ii);
        let cc = str.charCodeAt(ii);
        if (isBlank(cc)) {
            continue;
        };
        if (cc === 10) {
            line++;
            column = 0;
            continue;
        };
        if (isAlpha(cc)) {
            let start = ii;
            while (true) {
                if (!isAlpha(cc) && !isNumber(cc)) {
                    ii--;
                    column--;
                    break;
                };
                next();
                cc = str.charCodeAt(ii);
            };
            let content = str.slice(start, ii + 1);
            processToken(tokens, content, line, column);
            continue;
        };
        if (isNumber(cc) || cc === 45 && isNumber(str.charCodeAt(ii + 1))) {
            let start = ii;
            while (true) {
                if (!isNumber(cc) && cc !== 45) {
                    ii--;
                    column--;
                    break;
                };
                next();
                cc = str.charCodeAt(ii);
            };
            let content = str.slice(start, ii + 1);
            let token = createToken(43, content, line, column);
            tokens.push(token);
            continue;
        };
        if (isQuote(cc)) {
            let start = ii;
            let begin = cc;
            while (true) {
                next();
                cc = str.charCodeAt(ii);
                if (isQuote(cc) && cc === begin) {
                    break;
                };
            };
            let content = str.slice(start + 1, ii);
            let token = createToken(42, content, line, column);
            token.isChar = content[0] === "'";
            tokens.push(token);
            continue;
        };
        if (ch === '/') {
            if (str.charAt(ii + 1) === '/') {
                while (true) {
                    if (cc === 10) {
                        column = 0;
                        line++;
                        break;
                    };
                    next();
                    cc = str.charCodeAt(ii);
                };
            };
            continue;
        };
        if (isPunctuatorChar(ch)) {
            let content = str.slice(ii, ii + 1);
            processToken(tokens, content, line, column);
            continue;
        };
        if (isOperatorChar(ch)) {
            let second = str.slice(ii + 1, ii + 2);
            processOperator(ch, second, line, column);
            continue;
        };
        if (ii >= length) {
            break;
        };
    };
    return (tokens);
};
let scope = null;

function Scope() {
    this.node = null;
    this.parent = null;
    this.symbols = {};
    this.resolve = function(id) {
        if (this.symbols[id]) {
            return (this.symbols[id]);
        } else {
            if (this.parent) {
                return (this.parent.resolve(id));
            };
        };
        return (null);
    };
    this.register = function(id, node) {
        this.symbols[id] = node;
    };
};

function pushScope(node) {
    let scp = new Scope();
    scp.node = node;
    scp.parent = scope;
    node.context = scp;
    scope = scp;
};

function popScope() {
    if (scope !== null) {
        scope = scope.parent;
    };
};
let pindex = 0;
let tokens = null;
let current = null;

function parse(tkns) {
    tokens = tkns;
    pindex = -1;
    next();
    let node = {
        kind: 46,
        body: null
    };
    pushScope(node);
    node.body = parseStatementList();
    return (node);
};

function peek(kind) {
    return (current && current.kind === kind);
};

function next() {
    pindex++;
    current = tokens[pindex];
};

function expect(kind) {
    if (current.kind !== kind) {
        __imports.error('Expected ' + kind + ' but got ' + current.kind + ' in ' + current.line + ':' + current.column);
    } else {
        next();
    };
};

function expectIdentifier() {
    if (current.kind !== 45) {
        __imports.error('Expected ' + 45 + ':identifier but got ' + current.kind + ':' + current.value);
    };
};

function eat(kind) {
    if (peek(kind)) {
        next();
        return (true);
    };
    return (false);
};

function parseStatementList() {
    let list = [];
    while (true) {
        if (!current) {
            break;
        };
        if (peek(17)) {
            break;
        };
        let node = parseStatement();
        if (!node) {
            break;
        };
        list.push(node);
    };
    return (list);
};

function parseStatement() {
    let node = null;
    if (peek(2)) {
        node = parseVariableDeclaration(48);
    } else if (peek(3)) {
        node = parseVariableDeclaration(49);
    } else if (peek(5)) {
        node = parseFunctionDeclaration();
    } else if (peek(11)) {
        node = parseReturnStatement();
    } else if (peek(6)) {
        node = parseIfStatement();
    } else if (peek(8)) {
        node = parseWhileStatement();
    } else if (peek(1)) {
        node = parseEnumDeclaration();
    } else if (peek(4)) {
        node = parseExport();
    } else {
        node = parseExpression();
        if (node === null) {
            __imports.error('Unknown node kind ' + current.value + ' in ' + current.line + ':' + current.column);
        };
    };
    eat(21);
    return (node);
};

function parseExport() {
    expect(4);
    let node = {
        kind: 50,
        init: null
    };
    if (peek(2) || peek(3) || peek(5)) {
        node.init = parseStatement();
    };
    return (node);
};

function parseWhileStatement() {
    let node = {
        kind: 65,
        condition: null,
        body: null
    };
    expect(8);
    node.condition = parseExpression();
    if (eat(16)) {
        pushScope(node);
        node.body = parseStatementList();
        popScope();
        expect(17);
    } else {
        node.body = parseExpression();
    };
    return (node);
};

function parseIfStatement() {
    let node = {
        kind: 47,
        condition: null,
        alternate: null,
        consequent: null
    };
    if (!eat(6)) {
        pushScope(node);
        node.consequent = parseIfBody();
        popScope();
        return (node);
    };
    expect(12);
    node.condition = parseExpression();
    expect(13);
    pushScope(node);
    node.consequent = parseIfBody();
    popScope();
    if (eat(7)) {
        node.alternate = parseIfStatement();
    };
    return (node);
};

function parseIfBody() {
    let node = null;
    if (eat(16)) {
        node = parseStatementList();
        expect(17);
    } else {
        node = [];
        node.push(parseExpression());
        eat(21);
    };
    return (node);
};

function parseReturnStatement() {
    expect(11);
    let node = {
        kind: 66,
        argument: parseExpression()
    };
    return (node);
};

function parseFunctionDeclaration() {
    expect(5);
    let node = {
        kind: 51,
        id: null,
        parameter: null,
        body: null
    };
    if (peek(45)) {
        node.id = current.value;
        scope.register(node.id, node);
        next();
    };
    node.parameter = parseFunctionParameters();
    if (eat(16)) {
        pushScope(node);
        node.body = parseStatementList();
        popScope();
        expect(17);
    };
    return (node);
};

function parseFunctionParameters() {
    let params = [];
    expect(12);
    while (true) {
        if (peek(13)) {
            break;
        };
        expectIdentifier();
        if (current.value === 'inout') {
            next();
            expectIdentifier();
            current.isInout = true;
            params.push(current);
        } else {
            current.isInout = false;
            params.push(current);
        };
        let param = params[params.length - 1];
        param.isParameter = true;
        scope.register(param.value, param);
        next();
        if (!eat(20)) {
            break;
        };
    };
    expect(13);
    return (params);
};

function parseEnumDeclaration() {
    expect(1);
    let node = {
        kind: 52,
        name: null,
        body: null
    };
    expectIdentifier();
    node.name = current.value;
    scope.register(node.name, node);
    next();
    expect(16);
    node.body = parseEnumBody();
    expect(17);
    return (node);
};

function parseEnumExpression() {
    let name = null;
    let member = null;
    let isShorty = eat(18);
    if (isShorty) {
        expectIdentifier();
        let nameToResolve = current.value;
        let cscope = scope;
        while (cscope !== null) {
            let sym = cscope.symbols;
            let keys = Object.keys(sym);
            let kk = 0;
            while (kk < keys.length) {
                let key = keys[kk];
                let item = sym[key];
                if (item.kind === 52) {
                    let jj = 0;
                    while (jj < item.body.length) {
                        let child = item.body[jj];
                        if (child.name === nameToResolve) {
                            name = item.name;
                            member = nameToResolve;
                            cscope = {
                                parent: null
                            };
                            kk = keys.length + 1;
                            break;
                        };
                        jj++;
                    };
                };
                kk++;
            };
            cscope = cscope.parent;
        };
    } else {
        name = current.value;
        expect(18);
    };
    expectIdentifier();
    let node = {
        kind: 54,
        value: null
    };
    let resolve = scope.resolve(name);
    if (resolve && resolve.kind === 52) {
        let ii = 0;
        let body = resolve.body;
        while (ii < body.length) {
            let child = body[ii];
            if (child.name === member) {
                node.value = child.init;
                break;
            };
            ii++;
        };
    };
    next();
    return (node);
};

function parseEnumBody() {
    let keys = [];
    let idx = 0;
    while (peek(45)) {
        let node = {
            kind: 53,
            name: current.value,
            init: null
        };
        next();
        if (eat(22)) {
            if (!isLiteral(current)) {
                __imports.error('Enum key ' + node.name + ' can only have numeric value');
            } else {
                node.init = parseLiteral();
                idx = node.init.value;
            };
        } else {
            node.init = {
                value: idx++
            };
        };
        scope.register(node.name, node);
        keys.push(node);
        if (!eat(20)) {
            break;
        };
    };
    return (keys);
};

function parseVariableDeclaration(kind) {
    next();
    expectIdentifier();
    let node = {
        kind: kind,
        id: current.value,
        init: null
    };
    next();
    scope.register(node.id, node);
    expect(22);
    node.init = parseExpression();
    return (node);
};

function parseMemberExpression(parent) {
    expect(18);
    let node = {
        kind: 58,
        parent: parent,
        member: parseExpression()
    };
    if (node.parent.kind === 69 && node.member.kind === 69) {
        let resolve = scope.resolve(node.parent.value);
        if (resolve && resolve.kind === 52) {
            let ii = 0;
            while (ii < resolve.body.length) {
                let child = resolve.body[ii];
                if (node.member.value === child.name) {
                    node = {
                        kind: 54,
                        value: child.init
                    };
                    break;
                };
                ii++;
            };
        };
    };
    return (node);
};

function parseComputedMemberExpression(parent) {
    expect(14);
    let node = {
        kind: 59,
        parent: parent,
        member: parseExpression()
    };
    expect(15);
    return (node);
};

function parseCallExpression(id) {
    let node = {
        kind: 64,
        callee: id,
        parameter: parseCallParameters()
    };
    let resolve = scope.resolve(id.value);
    if (resolve && resolve.kind === 51) {
        let params = resolve.parameter;
        let idx = 0;
        params.map(function(item) {
            let param = node.parameter[idx];
            let loc = id.value + '::' + param.value;
            if (item.isInout) {
                if (param.kind !== 69) {
                    __imports.error('Function ' + loc + ' is inout and only accepts literals');
                } else {
                    let resolve = scope.resolve(param.value);
                    if (resolve.kind !== 48) {
                        __imports.error('Passing by reference in ' + loc + ' only accepts variables right now');
                    } else {
                        if (!resolve.isLaterReference) {
                            resolve.isLaterReference = true;
                        };
                    };
                };
            };
            idx++;
        });
    };
    return (node);
};

function parseCallParameters() {
    let params = [];
    expect(12);
    while (true) {
        if (peek(13)) {
            break;
        };
        let expr = parseExpression();
        params.push(expr);
        if (!eat(20)) {
            break;
        };
    };
    expect(13);
    return (params);
};

function parseBreak() {
    expect(9);
    let node = {
        kind: 67
    };
    return (node);
};

function parseContinue() {
    expect(10);
    let node = {
        kind: 68
    };
    return (node);
};

function parseObjectExpression() {
    let node = {
        kind: 60,
        properties: []
    };
    expect(16);
    while (true) {
        if (peek(17)) {
            break;
        };
        let property = {
            kind: 61,
            id: parseLiteral(),
            value: null
        };
        expect(19);
        property.value = parseExpression();
        node.properties.push(property);
        if (!eat(20)) {
            break;
        };
    };
    expect(17);
    return (node);
};

function parseUnaryPrefixExpression() {
    let node = {
        kind: 55,
        operator: current.value,
        value: null
    };
    next();
    node.value = parseLiteral();
    return (node);
};

function parseUnaryPostfixExpression(left) {
    let node = {
        kind: 56,
        operator: current.value,
        value: left
    };
    next();
    return (node);
};

function parseBinaryExpression(left) {
    let node = {
        kind: 57,
        left: left,
        right: null,
        operator: current.value
    };
    next();
    node.right = parseExpression();
    return (node);
};

function parseInfix(left) {
    if (isBinaryOperator(current)) {
        return (parseBinaryExpression(left));
    };
    if (isUnaryPostfixOperator(current)) {
        return (parseUnaryPostfixExpression(left));
    };
    if (peek(12)) {
        return (parseCallExpression(left));
    };
    if (peek(18)) {
        return (parseMemberExpression(left));
    };
    if (peek(14)) {
        return (parseComputedMemberExpression(left));
    };
    return (left);
};

function parsePrefix() {
    if (isLiteral(current)) {
        return (parseLiteral());
    };
    if (peek(16)) {
        return (parseObjectExpression());
    };
    if (peek(14)) {
        return (parseArrayExpression());
    };
    if (eat(12)) {
        let node = parseExpression();
        expect(13);
        return (node);
    };
    if (isUnaryPrefixOperator(current)) {
        return (parseUnaryPrefixExpression());
    };
    return (parseStatement());
};

function parseArrayExpression() {
    expect(14);
    let node = {
        kind: 62,
        elements: []
    };
    while (true) {
        if (peek(15)) {
            break;
        };
        let element = {
            kind: 63,
            value: parseExpression()
        };
        node.elements.push(element);
        if (!eat(20)) {
            break;
        };
    };
    expect(15);
    return (node);
};

function parseExpression() {
    if (peek(9)) {
        return (parseBreak());
    };
    if (peek(10)) {
        return (parseContinue());
    };
    if (peek(18)) {
        return (parseEnumExpression());
    };
    let node = parsePrefix();
    while (true) {
        if (!current) {
            break;
        };
        let expr = parseInfix(node);
        if (expr === null || expr === node) {
            break;
        };
        node = expr;
    };
    return (node);
};

function parseLiteral() {
    if (peek(42)) {
        return (parseStringLiteral());
    };
    let node = {
        kind: 69,
        type: current.kind,
        value: current.value
    };
    next();
    return (node);
};

function parseStringLiteral() {
    let node = {
        kind: 70,
        type: current.kind,
        value: current.value,
        isChar: current.isChar
    };
    next();
    return (node);
};
let out = '';

function write(str) {
    out = out + str;
};

function generate(node) {
    out = '';
    generateBody(node.body);
    return (out);
};

function generateBody(body) {
    let ii = 0;
    while (ii < body.length) {
        generateNode(body[ii]);
        ii++;
        write(';');
    };
};

function generateNode(node) {
    let kind = node.kind;
    if (kind === 51) {
        write('function ');
        if (node.id) {
            write(node.id);
        };
        write('(');
        let ii = 0;
        pushScope(node);
        while (ii < node.parameter.length) {
            write(node.parameter[ii].value);
            if (ii + 1 < node.parameter.length) {
                write(', ');
            };
            ii++;
        };
        write(')');
        write(' { ');
        generateBody(node.body);
        write(' } ');
        popScope();
    } else if (kind === 48) {
        let isLaterReference = node.isLaterReference;
        write('let ');
        write(node.id);
        write(' = ');
        if (isLaterReference) {
            write('{');
            write('$iov:');
        };
        generateNode(node.init);
        if (isLaterReference) {
            write('}');
        };
    } else if (kind === 49) {
        write('const ');
        write(node.id);
        write(' = ');
        generateNode(node.init);
    } else if (kind === 47) {
        if (node.condition) {
            write('if (');
            generateNode(node.condition);
            write(')');
        };
        write(' { ');
        pushScope(node.consequent);
        generateBody(node.consequent);
        popScope();
        write(' } ');
        if (node.alternate) {
            write('else ');
            pushScope(node.alternate);
            generateNode(node.alternate);
            popScope();
        };
    } else if (kind === 66) {
        write('return (');
        generateNode(node.argument);
        write(')');
    } else if (kind === 65) {
        write('while ');
        write('(');
        generateNode(node.condition);
        write(')');
        pushScope(node);
        write(' {');
        generateBody(node.body);
        write(' } ');
        popScope();
    } else if (kind === 67) {
        write('break');
        write('');
    } else if (kind === 68) {
        write('continue');
        write('');
    } else if (kind === 64) {
        let callee = node.callee;
        let resolve = scope.resolve(callee.value);
        generateNode(callee);
        write('(');
        let ii = 0;
        while (ii < node.parameter.length) {
            if (resolve && resolve.parameter[ii].isInout) {
                write(node.parameter[ii].value);
            } else {
                generateNode(node.parameter[ii]);
            }; if (ii + 1 < node.parameter.length) {
                write(', ');
            };
            ii++;
        };
        write(')');
    } else if (kind === 57) {
        generateNode(node.left);
        if (node.operator === '==') {
            write(' === ');
        } else if (node.operator === '!=') {
            write(' !== ');
        } else {
            write(node.operator);
        };
        generateNode(node.right);
    } else if (kind === 58) {
        generateNode(node.parent);
        write('.');
        generateNode(node.member);
    } else if (kind === 59) {
        generateNode(node.parent);
        write('[');
        generateNode(node.member);
        write(']');
    } else if (kind === 55) {
        if (node.operator === 'new') {
            write(node.operator);
            write(' ');
        } else {
            write(node.operator);
        };
        generateNode(node.value);
    } else if (kind === 56) {
        generateNode(node.value);
        write(node.operator);
    } else if (kind === 60) {
        write('{');
        let ii = 0;
        while (ii < node.properties.length) {
            let property = node.properties[ii];
            generateNode(property.id);
            write(': ');
            generateNode(property.value);
            if (ii + 1 < node.properties.length) {
                write(', ');
            };
            ii++;
        };
        write(' }');
    } else if (kind === 62) {
        write('[');
        let ii = 0;
        while (ii < node.elements.length) {
            let element = node.elements[ii];
            generateNode(element.value);
            if (ii + 1 < node.elements.length) {
                write(', ');
            };
            ii++;
        };
        write(']');
    } else if (kind === 69) {
        let resolve = scope.resolve(node.value);
        write(node.value);
        if (resolve) {
            if (resolve.isLaterReference) {
                write('.$iov');
            } else if (resolve.isParameter && resolve.isInout) {
                write('.$iov');
            };
        };
    } else if (kind === 70) {
        let isChar = node.isChar;
        if (isChar) {
            write('"');
        } else {
            write("'");
        };
        write(node.value);
        if (isChar) {
            write('"');
        } else {
            write("'");
        };
    } else if (kind === 50) {
        let init = node.init;
        write('module.exports.');
        write(init.id);
        write(' = ');
        if (init.kind === 51) {
            generateNode(init);
        } else if (init.kind === 48 || init.kind === 49) {
            generateNode(init.init);
        } else {
            __imports.error('Cannot export node kind ' + init.kind + '!');
        };
    } else if (kind === 52) {
        let name = node.name;
        let body = node.body;
        write('var ');
        write(name);
        write(';');
        write('(function(');
        write(name);
        write(') {');
        let ii = 0;
        while (ii < body.length) {
            let child = body[ii];
            write(name);
            write('[');
            write(name);
            write('[');
            write("'" + child.name + "'");
            write(']');
            write(' = ');
            write(child.init.value);
            write('] = ');
            write("'" + child.name + "'");
            write(';');
            ii++;
        };
        write('})(');
        write(name);
        write(' || (');
        write(name);
        write(' = {})');
        write(')');
    } else if (kind === 54) {
        write(node.value.value);
    } else {
        __imports.error('Unknown node kind ' + node.kind + '!');
    };
};
let __imports = null;
let compile = function compile(str, imports) {
    __imports = imports;
    let tokens = scan(str);
    let ast = parse(tokens);
    return (generate(ast));
};
compile(`
  function sum(a, b) {
    return a + b;
  };

  function main() {
    return sum(2, 2) + sum(4, 4);
  };

  let b = main();

`);
