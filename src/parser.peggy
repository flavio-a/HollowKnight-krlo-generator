Rules
  = rules:RuleLine+ { return rules.filter(r => !!r) }

RuleLine
  = "\n" {} / "#" [^\n]* "\n" {} / Rule

Rule
  = lhs:Identifier ":" _ logic:Logic "\n"? { return {lhs, logic}; }

Identifier
  =	[a-zA-Z_\-']+ { return text(); }

Difficulty
  = "difficulty >= " value:Integer { return {kind: "min-difficulty", value: value }; }

Integer "integer"
  = _ [0-9]+ { return parseInt(text(), 10); }

Basic
  = Difficulty / ide:Identifier {return {kind: "identifier", value: ide}; }

Logic
  = head:Term tail:(_ "+" _ t:Term { return t; })* {
  	if (tail.length === 0) { return head; };
  	return { kind: "and", operands: [head, ...tail]};
  }

Term
  = head:Factor tail:(_ "||" _ t:Factor { return t;})* {
  	if (tail.length === 0) { return head; };
    return { kind: "or", operands: [head, ...tail] }
  }

Factor
  = "(" _ expr:Logic _ ")" { return expr; } / Basic

_ "whitespace"
  = [ \t\n\r]*
