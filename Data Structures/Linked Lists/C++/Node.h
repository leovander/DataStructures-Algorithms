#ifndef NODE_H
#define NODE_H

class Node {
public:
  Node(int value);
  ~Node();
  const int value();
  void setData(int value);
  void setNext(Node *next);
  Node *getNext();
private:
  int data;
  Node *next;
}

#endif
