describe("a basic test suite", function () {
  it("should use chai assertions", function () {
    chai.expect(1 + 1).to.equal(2);
  });

  it("should run some async code", async function () {
    const message = await new Promise((resolve) =>
      setTimeout(resolve, 500, "Hello World!")
    );

    chai.expect(message).to.be.a("string");
    chai.expect(message).to.equal("Hello World!");
  });

  describe("api from preload", function () {
    it("should run sayHello", function () {
      window.test_api.sayHello();
    });

    it("should run async sayBye", async function () {
      await window.test_api.sayBye();
    });

    it("should iterate over a native iterable", function () {
      function* generate() {
        for (const i of [1, 2, 3]) {
          yield i;
        }
      }

      const result = window.test_api.iterate(generate());

      chai.expect(result).to.deep.equal([1, 2, 3]);
    });

    it("should iterate over a non-native iterable", function () {
      const iterable = {
        [Symbol.iterator]: function () {
          const values = [1, 2, 3];
          let index = 0;

          return {
            next() {
              if (index >= values.length) {
                return { done: true };
              } else {
                return { value: values[index++] };
              }
            },
          };
        },
      };

      const result = window.test_api.iterate(iterable);

      chai.expect(result).to.deep.equal([1, 2, 3]);
    });
  });
});
