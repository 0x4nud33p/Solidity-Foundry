import ethers from "ethers";

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const OG = await ethers.deployContract("Token");

    const ownerBalance = await OG.balanceOf(owner.address);
    expect(await OG.totalSupply()).to.equal(ownerBalance);
  });
});