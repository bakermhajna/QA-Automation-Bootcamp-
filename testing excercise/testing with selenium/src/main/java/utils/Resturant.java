package utils;

import java.util.Objects;

public class Resturant {


    private int id;
    private String name;
    private String address;
    private int score;

    public Resturant(int id, String name, String address, int score) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.score = score;
    }

    public Resturant(Resturant res) {
        this.id = res.id;
        this.name = res.name;
        this.address = res.address;
        this.score = res.score;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Resturant resturant = (Resturant) o;
        return Objects.equals(id, resturant.id) && Objects.equals(name, resturant.name) && Objects.equals(address, resturant.address) && Objects.equals(score, resturant.score);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, address, score);
    }

    @Override
    public String toString() {
        return "Resturant{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", score='" + score + '\'' +
                '}';
    }

}
