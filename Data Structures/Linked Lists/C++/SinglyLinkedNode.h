#ifndef SINGLYLISTEDNODE_H
#define SINGLYLISTEDNODE_H

class Node {
public:
  Node(int value);
  ~Node();
  const value();
  void setData(int value);
  void setNext(Node *next);
  Node *getNext();
private:
  int data;
  Node *next;
}

#endif
