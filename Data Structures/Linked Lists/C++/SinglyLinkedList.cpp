/*
  SinglyLinkedList and Node Definitions
*/

class Node {
public:
  Node(int value);
  ~Node();
  const value();
  void setData(int value);
  void setNext(Node *next);
private:
  int data;
  Node *next;
}

Node::Node(int value) {
  next = NULL;
  data = value;
}

const int Node::getValue() {
  return data;
}

void Node::setData(int value) {
  data = value;
}

void Node::setNext(Node *next) {
  this.next = next;
}
