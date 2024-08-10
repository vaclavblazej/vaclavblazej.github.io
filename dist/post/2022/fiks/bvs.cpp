#include <bits/stdc++.h>
using namespace std;

struct Node{
    Node *left, *right, *parent;
    int value;
    Node(int v):value(v){
        left=right=parent=NULL;
    }
    void insert(int v){
        Node *maybe = find(v);
        if(maybe->value == v) return;
        Node **child = (v < maybe->value) ? &(maybe->left) : &(maybe->right);
        (*child) = new Node(v);
        (*child)->parent = maybe;
    }
    Node* find(int v){
        if(v == value) return this;
        Node **child = (v < value) ? &left : &right;
        if(*child) return (*child)->find(v);
        return this;
    }
    void erase(){
        if(left && right){
            Node* nxt = next();
            value = nxt->value;
            nxt->erase();
        }else{
            Node *child = left ? left : right;
            if(parent){
                if(isleftchild()) parent->left = child;
                else parent->right = child;
                if(child) child->parent = parent;
            }
            delete this;
        }
    }
    void erase(int v){
        Node *todelete = find(v);
        if(todelete->value != v) return;
        todelete->erase();
    }
    bool isleftchild(){
        return parent!=NULL && parent->left == this;
    }
    Node* next(){
        if(right == NULL){
            Node *goup = this;
            while(true){
                if(goup==NULL)return NULL;
                if(goup->isleftchild()){
                    return goup->parent;
                }
                goup = goup->parent;
            }
        }else{
            Node *godown = right;
            while(godown->left != NULL){
                godown = godown->left;
            }
            return godown;
        }
    }
    void print(int depth = 0){
        cout << string(depth,' ') << value << endl;
        if(left) left->print(depth+1);
        else cout << string(depth+1,' ') << "nic" << endl;
        if(right) right->print(depth+1);
        else cout << string(depth+1,' ') << "nic" << endl;
    }
};

int main(int argc, char **argv){
    Node *n = new Node(8);
    n->insert(2);
    n->insert(1);
    n->insert(3);
    n->insert(10);
    n->insert(9);
    n->insert(14);
    n->print();
    n->erase(8);
    n->print();
    cout << (n->next())->value << endl;

    return 0;
}
