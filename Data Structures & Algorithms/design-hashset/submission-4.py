class ListNode:

    def __init__(self, val = None, next = None):
        self.val = val
        self.next = next


class MyHashSet:

    def __init__(self, size = 10000):
        self.size = size
        self.list = [ListNode() for _ in range(size)]
        

    def add(self, key: int) -> None:
        
        prev = self.list[key % self.size]
        head = prev.next

        while head:
            if head.val == key:
                return
            prev = head
            head = head.next
        
        new_node = ListNode(key)
        prev.next = new_node

        

    def remove(self, key: int) -> None:

        prev = self.list[key % self.size]
        head = prev.next

        while head:
            if head.val == key:
                prev.next = head.next
                head.next = None
                return
            perv = head
            head = head.next

    def contains(self, key: int) -> bool:

        prev = self.list[key % self.size]
        head = prev.next

        while head:
            if head.val == key:
                return True
            head = head.next

        return False 
        


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)